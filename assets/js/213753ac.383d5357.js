"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["5723"], {
9022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_post_template_setup_guide_md_213_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-post-template-setup-guide-md-213.json
var site_docs_documentation_user_docs_framework_dependency_post_template_setup_guide_md_213_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-post-template-setup-guide","title":"Post-Template Setup Guide","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-post-template-setup-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-07T15:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Dependency Integration Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide"},"next":{"title":"GitHub Template Enablement Instructions","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-template-enablement-instructions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-07T15:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Post-Template Setup Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Quick Start Checklist",
  "id": "quick-start-checklist",
  "level": 2
}, {
  "value": "Step-by-Step Setup",
  "id": "step-by-step-setup",
  "level": 2
}, {
  "value": "Step 1: Update Project Name and Branding",
  "id": "step-1-update-project-name-and-branding",
  "level": 3
}, {
  "value": "Step 2: Configure Version File",
  "id": "step-2-configure-version-file",
  "level": 3
}, {
  "value": "Step 3: Reset/Initialize Changelog",
  "id": "step-3-resetinitialize-changelog",
  "level": 3
}, {
  "value": "Step 4: Customize Kanban Board",
  "id": "step-4-customize-kanban-board",
  "level": 3
}, {
  "value": "Step 5: Update Configuration Files",
  "id": "step-5-update-configuration-files",
  "level": 3
}, {
  "value": "Step 6: Verify Framework Installation",
  "id": "step-6-verify-framework-installation",
  "level": 3
}, {
  "value": "Step 7: Test Release Workflow (RW)",
  "id": "step-7-test-release-workflow-rw",
  "level": 3
}, {
  "value": "Step 8: Push to Your Repository",
  "id": "step-8-push-to-your-repository",
  "level": 3
}, {
  "value": "Post-Setup Verification",
  "id": "post-setup-verification",
  "level": 2
}, {
  "value": "Checklist",
  "id": "checklist",
  "level": 3
}, {
  "value": "Quick Verification Commands",
  "id": "quick-verification-commands",
  "level": 3
}, {
  "value": "Common Issues and Solutions",
  "id": "common-issues-and-solutions",
  "level": 2
}, {
  "value": "Issue: Git remote still points to ai-dev-kit",
  "id": "issue-git-remote-still-points-to-ai-dev-kit",
  "level": 3
}, {
  "value": "Issue: Framework scripts can&#39;t find version file",
  "id": "issue-framework-scripts-cant-find-version-file",
  "level": 3
}, {
  "value": "Issue: Changelog validation fails",
  "id": "issue-changelog-validation-fails",
  "level": 3
}, {
  "value": "Issue: Kanban board shows template epics",
  "id": "issue-kanban-board-shows-template-epics",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}, {
  "value": "Template-Specific Files Reference",
  "id": "template-specific-files-reference",
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
        id: "post-template-setup-guide",
        children: "Post-Template Setup Guide"
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
      children: "This guide walks you through the essential setup steps after creating a new project from the ai-dev-kit template. Follow these steps to customize the template for your project and get started with all frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the locked greenfield-first sequence and verification gates, pair this guide with:"
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
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use This Guide:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You just created a repository from the ai-dev-kit template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to customize the template for your project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You're setting up Use Case 1: Template → All Packages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start-checklist",
      children: "Quick Start Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update project name and branding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Configure version file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Reset/initialize changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Customize Kanban board"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update configuration files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Verify framework installation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test Release Workflow (RW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Push to your repository"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-setup",
      children: "Step-by-Step Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-update-project-name-and-branding",
      children: "Step 1: Update Project Name and Branding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.1 Update README.md:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Edit README.md\n# Replace \"AI Dev Kit\" with your project name\n# Update project description\n# Update badges and links\n# Update contact information\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After customizing README structure, initialize an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "upstream doc/style register"
      }), " in your repo (Best-README-Template, Keep a Changelog, Shields.io)—see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/adopter-external-resource-dependency-tracking",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "adopter-external-resource-dependency-tracking.md"
        })
      }), ". That is separate from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "framework package"
      }), " updates covered in the framework-dependency guides."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.2 Search and Replace Project References:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find all references to \"ai-dev-kit\" or \"AI Dev Kit\"\ngrep -r \"ai-dev-kit\" . --exclude-dir=.git\ngrep -r \"AI Dev Kit\" . --exclude-dir=.git\n\n# Replace with your project name (example: \"my-project\")\nfind . -type f -name \"*.md\" -o -name \"*.yaml\" -o -name \"*.yml\" -o -name \"*.py\" | \\\n  xargs sed -i '' 's/ai-dev-kit/my-project/g'\nfind . -type f -name \"*.md\" -o -name \"*.yaml\" -o -name \"*.yml\" -o -name \"*.py\" | \\\n  xargs sed -i '' 's/AI Dev Kit/My Project/g'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.3 Update GitHub URLs:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update repository URLs in documentation\n# Search for: https://github.com/RMS-Ltd/ai-dev-kit\n# Replace with: https://github.com/yourusername/your-project\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-configure-version-file",
      children: "Step 2: Configure Version File"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["2.1 Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The version file contains ai-dev-kit specific references. Update it for your project:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Change file header comment\n\"\"\"\nMy Project Version File\n\nThis file defines the version for the my-project repository...\n\"\"\"\n\n# Update Epic description\nVERSION_EPIC = 1      # Epic number (Epic 1: My Project Core)\n\n# Update validation notes if needed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2.2 Update Package Path (if different):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your project structure differs from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/fynd_deals/"
      }), ", update the path:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# If your project uses a different structure, update:\n# - Version file location\n# - Import paths in validation scripts\n# - Framework configuration paths\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-resetinitialize-changelog",
      children: "Step 3: Reset/Initialize Changelog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.1 Option A: Start Fresh Changelog (Recommended for New Projects):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Backup the existing changelog (optional, for reference)\ncp CHANGELOG.md CHANGELOG-template-backup.md\n\n# Create new changelog\ncat > CHANGELOG.md << 'EOF'\n# Changelog\n\nAll notable changes to this project will be documented in this file.\n\nThe format is inspired by **Keep a Changelog** and this project adheres to the **`RC.EPIC.STORY.TASK+BUILD`** versioning scheme.\n\n---\n\n## [Unreleased]\n\n### Planned\n- Initial project setup\n- Framework integration\n- Project-specific features\n\n---\nEOF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.2 Option B: Keep Template Changelog (For Reference):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you want to keep the template's changelog for reference:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Rename existing changelog\nmv CHANGELOG.md CHANGELOG-template-reference.md\n\n# Create new changelog (as in Option A)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.3 Archive Template Changelog (Optional):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Move template changelog to archive\nmkdir -p docs/changelog-and-release-notes/Template_Reference\nmv CHANGELOG-template-backup.md docs/changelog-and-release-notes/Template_Reference/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-customize-kanban-board",
      children: "Step 4: Customize Kanban Board"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "🚨 IMPORTANT: Use the Kanban Installer (REQUIRED)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["⚠️ DO NOT manually copy epics from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The template includes ai-dev-kit's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "actual Kanban board"
      }), " (with project-specific epics). This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT"
      }), " what you want. You need ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical epic templates"
      }), " that are contextualized for your project."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ USE THE INSTALLER INSTEAD:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.1 Run Kanban Framework Installer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# The installer is the ONLY supported method for setting up your Kanban board\n# It installs canonical epic templates (not ai-dev-kit's actual epics)\npython3 packages/frameworks/kanban/scripts/install_kanban_framework.py --mode fresh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What the installer does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Installs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "canonical epic templates"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/epics/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Contextualizes Epic 1 with your project name (e.g., \"MyProject Core\", not \"AI Dev Kit Core\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Only installs canonical core epics (1-8, 10, 18, 22, 23)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Excludes ai-dev-kit project-specific epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Creates properly structured epic directories ready for stories and tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.2 Contextualize Templates (Optional - Advanced):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you want to customize templates beyond the installer's automatic contextualization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Review the contextualization guide\ncat packages/frameworks/kanban/templates/CONTEXTUALIZATION_GUIDE.md\n\n# The guide explains:\n# - Placeholder replacement ({PROJECT_NAME}, {DOMAIN}, etc.)\n# - Scalability guidance (tiny, small, medium, ambitious projects)\n# - Customization guidelines (Epic, Story, Task levels)\n# - Examples for different project types\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.3 Update Kanban Board Views:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After installation, update the board views:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update docs/project-management/kanban/_index.md\n# Update docs/project-management/kanban/kboard.md\n# Add your project epics to the board views\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.4 Verify Installation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check that canonical epics are installed (not ai-dev-kit's epics)\nls docs/project-management/kanban/epics/\n\n# Should show: epic-01, epic-02, epic-03, epic-04, epic-05, epic-06, epic-07, epic-08, epic-10, epic-18, epic-22, epic-23\n# Should NOT show: epic-24 (ai-dev-kit specific)\n\n# Verify Epic 1 is contextualized with your project name\ngrep \"Epic 1:\" docs/project-management/kanban/epics/epic-01/epic-01.md\n# Should show your project name, not \"AI Dev Kit\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contextualization Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/CONTEXTUALIZATION_GUIDE.md"
        }), " - Complete guide for customizing templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contextualization Examples:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/examples/contextualized/"
        }), " - Examples for tiny, small, and ambitious projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Installer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/install_kanban_framework.py"
        }), " - Interactive installer script"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-update-configuration-files",
      children: "Step 5: Update Configuration Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5.1 Update Release Workflow Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Edit packages/frameworks/workflow-mgt/config/examples/rw-config-ai-dev-kit.yaml\n# Or create your own: rw-config-my-project.yaml\n\n# Update:\n# - project_name: \"my-project\"\n# - project_paths: Update to match your structure\n# - epic names and descriptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5.2 Update Framework Paths:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Search for example paths\ngrep -r \"src/confidentia\" packages/frameworks/\ngrep -r \"src/fynd_deals\" packages/frameworks/\n\n# Replace with your project paths\nfind packages/frameworks/ -type f -exec sed -i '' 's/src\\/fynd_deals/src\\/yourproject/g' {} \\;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5.3 Update Framework READMEs (Optional):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Framework READMEs may contain ai-dev-kit references. Update if needed:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Search for references\ngrep -r \"ai-dev-kit\" packages/frameworks/*/README.md\n\n# Update if you want to customize framework documentation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-6-verify-framework-installation",
      children: "Step 6: Verify Framework Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6.1 Check Framework Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify all frameworks are present\nls packages/frameworks/\n# Should show: debug-path, doc-lifecycle, kanban, numbering & versioning, workflow mgt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6.2 Test Framework Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test version validation\npython3 packages/frameworks/workflow\\ mgt/scripts/validation/validate_branch_context.py\n\n# Test changelog validation\npython3 packages/frameworks/workflow\\ mgt/scripts/validation/validate_changelog_format.py\n\n# Should run without errors (may show warnings if not configured)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6.3 Verify Git Integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check Git repository\ngit status\n\n# Verify frameworks are tracked (if using Git submodules)\ngit submodule status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-7-test-release-workflow-rw",
      children: "Step 7: Test Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.1 Configure Release Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create or update RW configuration\n# Copy example config\ncp packages/frameworks/workflow\\ mgt/config/examples/rw-config-ai-dev-kit.yaml \\\n   packages/frameworks/workflow\\ mgt/config/rw-config-my-project.yaml\n\n# Edit with your project details\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.2 Test RW Execution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Make a small change (e.g., update README)\necho \"# Test\" >> test.txt\ngit add test.txt\n\n# Run RW (via AI assistant: e.g. RW E5S01T01 / RW E5:S01:T01 — FR-060)\n# Or manually:\n# 1. Bump version\n# 2. Update changelog\n# 3. Commit and tag\n# 4. Update Kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.3 Verify RW Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check version was bumped\npython3 -c \"import sys; sys.path.insert(0, 'src'); from fynd_deals import version; print(version.VERSION_STRING)\"\n\n# Check changelog was updated\nhead -20 CHANGELOG.md\n\n# Check Kanban was updated\nls -la docs/project-management/kanban/epics/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-8-push-to-your-repository",
      children: "Step 8: Push to Your Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "8.1 Initial Commit:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Stage all changes\ngit add -A\n\n# Create initial commit\ngit commit -m \"Initial commit: Project setup from ai-dev-kit template\n\n- Updated project name and branding\n- Configured version file\n- Initialized changelog\n- Customized Kanban board\n- Updated configuration files\n- Verified framework installation\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "8.2 Push to Remote:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Push to your repository\ngit push -u origin main\n\n# Verify remote is correct\ngit remote -v\n# Should show your repository, not ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "post-setup-verification",
      children: "Post-Setup Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checklist",
      children: "Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Project name updated throughout codebase"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version file configured for your project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Changelog initialized/reset"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Kanban board customized"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Configuration files updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Framework paths updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Release Workflow tested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All changes committed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pushed to your repository"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Remote URL points to your repository (not ai-dev-kit)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-verification-commands",
      children: "Quick Verification Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check project name consistency\ngrep -r \"ai-dev-kit\" . --exclude-dir=.git | wc -l\n# Should be 0 or only in framework documentation\n\n# Check version file\npython3 -c \"import sys; sys.path.insert(0, 'src'); from fynd_deals import version; print(version.VERSION_STRING)\"\n# Should show your project's version\n\n# Check Git remote\ngit remote -v\n# Should show your repository URL\n\n# Test RW\npython3 packages/frameworks/workflow\\ mgt/scripts/validation/validate_branch_context.py\n# Should pass validation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-issues-and-solutions",
      children: "Common Issues and Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-git-remote-still-points-to-ai-dev-kit",
      children: "Issue: Git remote still points to ai-dev-kit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove old remote\ngit remote remove origin\n\n# Add your remote\ngit remote add origin https://github.com/yourusername/your-project.git\n\n# Verify\ngit remote -v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-framework-scripts-cant-find-version-file",
      children: "Issue: Framework scripts can't find version file"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check version file location\nls src/fynd_deals/version.py\n\n# If your structure is different, update framework configs\n# Or create symlink: ln -s src/yourproject/version.py src/fynd_deals/version.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-changelog-validation-fails",
      children: "Issue: Changelog validation fails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# If you started fresh, ensure changelog has proper format\n# See: packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md\n\n# Or temporarily disable validation for initial setup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-kanban-board-shows-template-epics",
      children: "Issue: Kanban board shows template epics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "⚠️ IMPORTANT:"
      }), " Do NOT manually copy epics from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/"
      }), ". These are ai-dev-kit's actual epics, not canonical templates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Use the interactive installer instead (RECOMMENDED)\npython3 packages/frameworks/kanban/scripts/install_kanban_framework.py --mode fresh\n\n# The installer will:\n# - Install canonical epic templates (not ai-dev-kit's actual epics)\n# - Contextualize Epic 1 with your project name\n# - Only install canonical core epics (1-8, 10, 18, 22, 23)\n# - Exclude ai-dev-kit project-specific epics\n\n# If you already manually copied (WRONG approach), remove them first:\nrm -rf docs/project-management/kanban/epics/Epic-*\n\n# Then run the installer:\npython3 packages/frameworks/kanban/scripts/install_kanban_framework.py --mode fresh\n\n# Update board views\n# Edit docs/project-management/kanban/_index.md\n# Edit docs/project-management/kanban/kboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing setup:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Your First Epic:"
        }), " Use the Kanban framework to plan your work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configure Frameworks:"
        }), " Customize framework settings for your project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start Development:"
        }), " Begin working on your project using the frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run Release Workflow:"
        }), " Use RW to manage versions and releases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases",
          children: "Use Cases Guide"
        }), " - All adoption patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "Installation Guide"
        }), " - Framework installation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide",
          children: "Usage Guide"
        }), " - Using installed frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
          children: "Integration Guide"
        }), " - Integrating frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/CONTEXTUALIZATION_GUIDE.md",
          children: "Contextualization Guide (source)"
        }), " - Customizing canonical templates for your project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/packages/frameworks/kanban/templates/examples/contextualized",
          children: "Contextualization Examples (source)"
        }), " - Example projects (tiny, small, ambitious)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-specific-files-reference",
      children: "Template-Specific Files Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files You Should Customize:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " - Project overview"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " - Version configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " - Project changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/"
        }), " - Kanban board"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/config/"
        }), " - RW configuration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files You Can Keep (Framework Documentation):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/*/README.md"
        }), " - Framework documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/"
        }), " - User guides (reference)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/"
        }), " - Architecture docs (reference)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files You Can Remove:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-*"
        }), " - Template epics (after creating your own)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/"
        }), " - Template changelog archives (optional)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "support",
      children: "Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you encounter issues during setup:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
          children: "Troubleshooting Guide"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review the ", (0,jsx_runtime.jsx)(_components.a, {
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