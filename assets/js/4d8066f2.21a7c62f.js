"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["8744"], {
7280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_template_enablement_instructions_md_4d8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-template-enablement-instructions-md-4d8.json
var site_docs_documentation_user_docs_framework_dependency_template_enablement_instructions_md_4d8_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-template-enablement-instructions","title":"GitHub Template Enablement Instructions","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-template-enablement-instructions.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-template-enablement-instructions","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-template-enablement-instructions","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-template-enablement-instructions.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-07T15:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Post-Template Setup Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide"},"next":{"title":"Framework Dependency Troubleshooting Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-template-enablement-instructions.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-07T15:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'GitHub Template Enablement Instructions';

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
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Step-by-Step Instructions",
  "id": "step-by-step-instructions",
  "level": 2
}, {
  "value": "Step 1: Navigate to Repository Settings",
  "id": "step-1-navigate-to-repository-settings",
  "level": 3
}, {
  "value": "Step 2: Enable Template Repository",
  "id": "step-2-enable-template-repository",
  "level": 3
}, {
  "value": "Step 3: Add Template Description",
  "id": "step-3-add-template-description",
  "level": 3
}, {
  "value": "Step 4: Add Topics/Tags",
  "id": "step-4-add-topicstags",
  "level": 3
}, {
  "value": "Step 5: Verify Template Status",
  "id": "step-5-verify-template-status",
  "level": 3
}, {
  "value": "Step 6: Test Template Creation (Optional but Recommended)",
  "id": "step-6-test-template-creation-optional-but-recommended",
  "level": 3
}, {
  "value": "Template Readiness Checklist",
  "id": "template-readiness-checklist",
  "level": 2
}, {
  "value": "Template Description",
  "id": "template-description",
  "level": 2
}, {
  "value": "What Users Get from Template",
  "id": "what-users-get-from-template",
  "level": 2
}, {
  "value": "Post-Enablement Tasks",
  "id": "post-enablement-tasks",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Template Button Not Appearing",
  "id": "template-button-not-appearing",
  "level": 3
}, {
  "value": "Template Creation Fails",
  "id": "template-creation-fails",
  "level": 3
}, {
  "value": "Files Missing from Template",
  "id": "files-missing-from-template",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
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
        id: "github-template-enablement-instructions",
        children: "GitHub Template Enablement Instructions"
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
      }), " E05:S04", ":T07", " - Set up ai-dev-kit repository as GitHub template"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides step-by-step instructions for enabling the ai-dev-kit repository as a GitHub template. Once enabled, users can create new repositories from the template using the \"Use this template\" button."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope-greenfield-vs-brownfield",
      children: "Scope (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repositories created from the template still follow the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "installer-driven greenfield path"
      }), " for framework setup documentation. Point adopters to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        })
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md",
        children: "IPW-E6S9T1"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
        children: "ADR-003"
      }), ", and brownfield boundaries in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md",
        children: "FR-081"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Admin access to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " repository"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub account with repository settings access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repository is in a clean, ready state"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-instructions",
      children: "Step-by-Step Instructions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-navigate-to-repository-settings",
      children: "Step 1: Navigate to Repository Settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Go to the repository: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://github.com/RMS-Ltd/ai-dev-kit"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Settings\""
        }), " tab (top navigation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scroll down to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Template repository\""
        }), " section (in General settings)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-enable-template-repository",
      children: "Step 2: Enable Template Repository"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Template repository\""
        }), " checkbox"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub will show a confirmation dialog"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"I understand, change repository to template\""
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository is now a template"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-add-template-description",
      children: "Step 3: Add Template Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the same settings page, scroll to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Repository details\""
        }), " section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Edit\""
        }), " next to \"Description\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enter template description:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "A comprehensive toolkit for AI-assisted development workflows. \nIncludes Workflow Management, Kanban, Versioning, Document Lifecycle, \nand Debug Path frameworks. Perfect for starting new projects with \nprofessional development practices.\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Save\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-add-topicstags",
      children: "Step 4: Add Topics/Tags"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In repository settings, scroll to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Topics\""
        }), " section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Add topics\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add the following topics:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-assisted-development"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-management"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "documentation"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "development-tools"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project-management"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Save changes\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-verify-template-status",
      children: "Step 5: Verify Template Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Go to the repository main page: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://github.com/RMS-Ltd/ai-dev-kit"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify you see the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Use this template\""
        }), " button (green button, top right)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click it to verify the template creation flow works"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(Don't actually create a repository, just verify the button appears)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-6-test-template-creation-optional-but-recommended",
      children: "Step 6: Test Template Creation (Optional but Recommended)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Use this template\""
        }), " button"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Create a new repository\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a test repository (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test-ai-dev-kit-template"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify all files are included:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["All frameworks in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete KB structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configuration files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete the test repository after verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-readiness-checklist",
      children: "Template Readiness Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before enabling the template, verify:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository is clean:"
        }), " No sensitive information, no temporary files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation is complete:"
        }), " All user guides are present and accurate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Frameworks are included:"
        }), " All 5 frameworks in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure is complete:"
        }), " KB structure, config files, examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Post-template guide exists:"
        }), " Users have setup instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "README is clear:"
        }), " Template usage is documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "No broken links:"
        }), " All documentation links work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Version file exists:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " is present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration examples:"
        }), " RW config examples are present"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-description",
      children: "Template Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended Description:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A comprehensive toolkit for AI-assisted development workflows. \nIncludes Workflow Management, Kanban, Versioning, Document Lifecycle, \nand Debug Path frameworks. Perfect for starting new projects with \nprofessional development practices.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended Topics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-assisted-development"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-management"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "versioning"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "documentation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "template"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "development-tools"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "project-management"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "git-workflow"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "release-management"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-users-get-from-template",
      children: "What Users Get from Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When users create a repository from the template, they receive:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " directory structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ All 5 frameworks in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Configuration files and examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documentation (7 user guides)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Example workflows and templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frameworks Included:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management (Release Workflow automation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban (Project management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Numbering & Versioning (Version management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document Lifecycle (TTL-based expiration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debug Path (Structured debugging)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Usage guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use cases guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Post-template setup guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FAQ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting guide"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "post-enablement-tasks",
      children: "Post-Enablement Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After enabling the template:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify installation guide mentions template is available"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update README to highlight template option"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add template badge if desired"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Template:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create test repository from template"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Follow post-template setup guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify all frameworks work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document any issues"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitor Usage:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Track template usage (GitHub Insights)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Collect user feedback"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update documentation based on feedback"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "template-button-not-appearing",
      children: "Template Button Not Appearing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template not enabled in settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User doesn't have view access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repository is private (templates work but visibility may differ)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify template is enabled in settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check repository visibility settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure user has appropriate access"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "template-creation-fails",
      children: "Template Creation Fails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repository size limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub API issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Permission problems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check repository size (GitHub has limits)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify GitHub status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check user permissions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "files-missing-from-template",
      children: "Files Missing from Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Files in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large file size limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git LFS issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " for excluded files"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check file sizes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Git LFS configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide",
          children: "Post-Template Setup Guide"
        }), " - Setup steps after creating from template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "Installation Guide"
        }), " - Template usage instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases",
          children: "Use Cases Guide"
        }), " - Use Case 1: Template → All Packages"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template enablement is a one-time setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template can be disabled and re-enabled as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template status is visible in repository settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template repositories can still be cloned normally"
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