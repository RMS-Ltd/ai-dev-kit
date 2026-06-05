"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["69378"], {
36529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_guides_badge_setup_for_private_repos_md_cd6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-guides-badge-setup-for-private-repos-md-cd6.json
var site_docs_knowledge_guides_badge_setup_for_private_repos_md_cd6_namespaceObject = JSON.parse('{"id":"knowledge/guides/badge-setup-for-private-repos","title":"Badge Setup for Private Repositories","description":"Last Updated: 2025-12-18","source":"@site/../docs/knowledge/guides/badge-setup-for-private-repos.md","sourceDirName":"knowledge/guides","slug":"/knowledge/guides/badge-setup-for-private-repos","permalink":"/ai-dev-kit/docs/knowledge/guides/badge-setup-for-private-repos","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/guides/badge-setup-for-private-repos.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Knowledge Base Guides","permalink":"/ai-dev-kit/docs/knowledge/guides/"},"next":{"title":"Building Persistent Knowledge in Cursor","permalink":"/ai-dev-kit/docs/knowledge/guides/building-persistent-knowledge"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/guides/badge-setup-for-private-repos.md


const frontMatter = {};
const contentTitle = 'Badge Setup for Private Repositories';

const assets = {

};



const toc = [{
  "value": "Problem",
  "id": "problem",
  "level": 2
}, {
  "value": "Solution: BYOB (Bring Your Own Badge)",
  "id": "solution-byob-bring-your-own-badge",
  "level": 2
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "Setup Instructions",
  "id": "setup-instructions",
  "level": 2
}, {
  "value": "Step 1: Create Public Badge Repository",
  "id": "step-1-create-public-badge-repository",
  "level": 3
}, {
  "value": "Step 2: Create Personal Access Token",
  "id": "step-2-create-personal-access-token",
  "level": 3
}, {
  "value": "Step 3: Add Token as Repository Secret",
  "id": "step-3-add-token-as-repository-secret",
  "level": 3
}, {
  "value": "Step 4: Configure Workflow",
  "id": "step-4-configure-workflow",
  "level": 3
}, {
  "value": "Step 5: Update README Badge URLs",
  "id": "step-5-update-readme-badge-urls",
  "level": 3
}, {
  "value": "Step 6: Test the Workflow",
  "id": "step-6-test-the-workflow",
  "level": 3
}, {
  "value": "Badge Configuration",
  "id": "badge-configuration",
  "level": 2
}, {
  "value": "Current Badges",
  "id": "current-badges",
  "level": 3
}, {
  "value": "Adding New Badges",
  "id": "adding-new-badges",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Badges Not Rendering",
  "id": "badges-not-rendering",
  "level": 3
}, {
  "value": "Test/Coverage Badges Not Updating",
  "id": "testcoverage-badges-not-updating",
  "level": 3
}, {
  "value": "Workflow Fails",
  "id": "workflow-fails",
  "level": 3
}, {
  "value": "Badge Data Not Updating",
  "id": "badge-data-not-updating",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Related Work",
  "id": "related-work",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "badge-setup-for-private-repositories",
        children: "Badge Setup for Private Repositories"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ai-dev-kit monorepo (2026-03-30):"
        }), " This repository uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "static"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "img.shields.io/badge/..."
        }), " badges in the root README only; there is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update-badges.yml"
        }), " or orphan ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " branch here. See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges",
          children: "FR-064"
        }), ". The rest of this guide remains useful for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "adopters"
        }), " who want BYOB with a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dedicated public badge repo"
        }), " and explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repository"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "actor"
        }), " in the workflow."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem",
      children: "Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Private GitHub repositories cannot use standard Shields.io badges because the badge service cannot access private repo data. Badges that rely on GitHub API access (like version badges, build status, etc.) will not render."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solution-byob-bring-your-own-badge",
      children: "Solution: BYOB (Bring Your Own Badge)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RubbaBoy/BYOB",
        children: "BYOB"
      }), " to create dynamic badges that work with private repositories by hosting badge metadata in a public repository."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Badge Data Storage:"
        }), " BYOB stores badge data in a JSON file (default: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields.json"
        }), " on a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " branch)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public Repo Hosting:"
        }), " For private repos, the JSON is stored in a separate public repository"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Badge Generation:"
        }), " The BYOB service (", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://byob.yarr.is/"
        }), ") reads the JSON and generates badges using ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://badgen.net/",
          children: "Badgen"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic Updates:"
        }), " GitHub Actions workflow updates badges automatically when version changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setup-instructions",
      children: "Setup Instructions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-create-public-badge-repository",
      children: "Step 1: Create Public Badge Repository"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a new public repository (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit-badges"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository can be minimal - it only needs to exist and be public"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Note the repository name format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{org}/{repo-name}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-badges"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-create-personal-access-token",
      children: "Step 2: Create Personal Access Token"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click \"Generate new token (classic)\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Give it a descriptive name (e.g., \"BYOB Badge Updates\")"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " scope (full control of private repositories)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click \"Generate token\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy the token immediately"
        }), " (you won't be able to see it again)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-add-token-as-repository-secret",
      children: "Step 3: Add Token as Repository Secret"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Go to your private repository (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navigate to Settings → Secrets and variables → Actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click \"New repository secret\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Name: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BADGES_REPO_TOKEN"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Value: Paste your Personal Access Token"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click \"Add secret\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-configure-workflow",
      children: "Step 4: Configure Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/update-badges.yml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REPOSITORY"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ACTOR"
        }), " values in each badge step:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-yaml",
            children: "REPOSITORY: 'RMS-Ltd/ai-dev-kit-badges'  # Your public repo\nACTOR: 'earlution'  # Your GitHub username\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uncomment these lines in all badge steps (version, license, status, tests, coverage, code-quality)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-update-readme-badge-urls",
      children: "Step 5: Update README Badge URLs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update badge URLs to point to your public badge repo:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-markdown",
            children: "![Version](https://byob.yarr.is/RMS-Ltd/ai-dev-kit-badges/version)\n![License](https://byob.yarr.is/RMS-Ltd/ai-dev-kit-badges/license)\n![Status](https://byob.yarr.is/RMS-Ltd/ai-dev-kit-badges/status)\n![Tests](https://byob.yarr.is/RMS-Ltd/ai-dev-kit-badges/tests)\n![Coverage](https://byob.yarr.is/RMS-Ltd/ai-dev-kit-badges/coverage)\n![Code Quality](https://byob.yarr.is/RMS-Ltd/ai-dev-kit-badges/code-quality)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-6-test-the-workflow",
      children: "Step 6: Test the Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make a change to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " (or trigger manually)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Push to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " branch"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the Actions tab - the workflow should run"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify badges appear in README after workflow completes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "badge-configuration",
      children: "Badge Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "current-badges",
      children: "Current Badges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version Badge"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updates automatically when version changes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Extracts version from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Color: Blue (", (0,jsx_runtime.jsx)(_components.code, {
              children: "007ACC"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Icon: Tag"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "License Badge"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Static: MIT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Color: Green"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Icon: Scale"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Status Badge"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Static: Active"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Color: Success (green)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Icon: Check circle"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Status Badge"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updates automatically when tests run"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extracts status from pytest test results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status: \"passing\" (green) or \"failing\" (red) or \"not configured\" (grey)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Color: Success (passing), Critical (failing), Grey (not configured)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Icon: Check circle"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Coverage Badge"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updates automatically when coverage is calculated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extracts coverage percentage from pytest-cov output"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status: Coverage percentage (e.g., \"85%\") or \"not configured\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Color: Success (≥80%), Important (≥60%), Critical (<60%), Grey (not configured)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Icon: Shield"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Code Quality Badge"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Updates automatically when code quality checks run"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses ruff (preferred), pylint, or flake8 for linting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status: \"passing\" (green), \"warnings\" (yellow), \"failing\" (red), or \"not configured\" (grey)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Color: Success (passing), Important (warnings), Critical (failing), Grey (not configured)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Icon: Code"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adding-new-badges",
      children: "Adding New Badges"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To add a new badge:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Add a new step in ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".github/workflows/update-badges.yml"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-yaml",
            children: "- name: Update {badge-name} badge\n  uses: RubbaBoy/BYOB@v1.3.0\n  with:\n    NAME: {badge-name}\n    LABEL: '{label}'\n    STATUS: ${{ steps.{step-id}.outputs.{output} }}\n    COLOR: {hex-color}\n    ICON: '{icon-name}'\n    GITHUB_TOKEN: ${{ secrets.BADGES_REPO_TOKEN || secrets.GITHUB_TOKEN }}\n    REPOSITORY: 'RMS-Ltd/ai-dev-kit-badges'\n    ACTOR: 'earlution'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add badge to README:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-markdown",
            children: "![{Label}](https://byob.yarr.is/RMS-Ltd/ai-dev-kit-badges/{badge-name})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "badges-not-rendering",
      children: "Badges Not Rendering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Public Repo:"
        }), " Ensure the public badge repository exists and is public"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Token:"
        }), " Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BADGES_REPO_TOKEN"
        }), " secret is set correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Workflow:"
        }), " Verify workflow ran successfully (check Actions tab)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check JSON File:"
        }), " Visit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://github.com/{org}/{badge-repo}/blob/shields/shields.json"
        }), " to verify badge data exists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check URLs:"
        }), " Verify README badge URLs match your public repo name"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testcoverage-badges-not-updating",
      children: "Test/Coverage Badges Not Updating"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Test Framework:"
        }), " Ensure pytest is installed and configured"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Test Files:"
        }), " Verify test files exist and are discoverable by pytest"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Coverage Tool:"
        }), " Ensure pytest-cov or coverage.py is installed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Workflow Output:"
        }), " Review workflow logs for test/coverage extraction errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Badge Data:"
        }), " Verify test status and coverage values in badge JSON file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-fails",
      children: "Workflow Fails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token Permissions:"
        }), " Ensure token has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository Name:"
        }), " Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REPOSITORY"
        }), " format is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "org/repo-name"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actor Name:"
        }), " Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ACTOR"
        }), " matches the token owner's username"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Permissions:"
        }), " Ensure workflow has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "contents: write"
        }), " permission"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "badge-data-not-updating",
      children: "Badge Data Not Updating"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Triggers:"
        }), " Verify workflow triggers on version file changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Branch:"
        }), " Ensure workflow pushes to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " branch (default)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Path:"
        }), " Verify JSON file path matches BYOB default (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/shields.json"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BYOB Repository:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RubbaBoy/BYOB",
          children: "https://github.com/RubbaBoy/BYOB"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BYOB Documentation:"
        }), " See BYOB README for complete usage guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Badgen Icons:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://badgen.net/",
          children: "https://badgen.net/"
        }), " (for available icon names)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/update-badges.yml"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic:"
        }), " Epic 1 – AI Dev Kit Core"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story:"
        }), " E1", ":S06", " – Repository CI/CD Setup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task:"
        }), " E1:S06", ":T01", " – Set up BYOB badges for private repository"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " This setup allows badges to work with private repositories by hosting badge metadata in a public repository. The badge data is minimal (just JSON), so there's no security concern with making it public."]
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