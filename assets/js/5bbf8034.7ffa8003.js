"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["12912"], {
42773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_environment_variables_sop_md_5bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-environment-variables-sop-md-5bb.json
var site_docs_architecture_standards_and_adrs_environment_variables_sop_md_5bb_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/environment-variables-sop","title":"Standard Operating Procedure: Environment Variables","description":"Version: 1.0","source":"@site/../docs/architecture/standards-and-adrs/environment-variables-sop.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/environment-variables-sop","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/environment-variables-sop","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/environment-variables-sop.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-20T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ECC ↔ AI Dev Kit — Phase 0 compatibility evaluation","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation"},"next":{"title":"Epic/Story path migration guide (lowercase segments)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/epic-story-path-migration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/environment-variables-sop.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-20T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Standard Operating Procedure: Environment Variables';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose",
  "level": 2
}, {
  "value": "Required Environment Variables",
  "id": "required-environment-variables",
  "level": 2
}, {
  "value": "GITHUB_TOKEN",
  "id": "github_token",
  "level": 3
}, {
  "value": "GITHUB_REPOSITORY",
  "id": "github_repository",
  "level": 3
}, {
  "value": "Workflow-Specific Requirements",
  "id": "workflow-specific-requirements",
  "level": 2
}, {
  "value": "Release Workflow (RW)",
  "id": "release-workflow-rw",
  "level": 3
}, {
  "value": "Package Upload Workflow",
  "id": "package-upload-workflow",
  "level": 3
}, {
  "value": "Error Handling Patterns",
  "id": "error-handling-patterns",
  "level": 2
}, {
  "value": "Pattern 1: Required Variable (Blocking)",
  "id": "pattern-1-required-variable-blocking",
  "level": 3
}, {
  "value": "Pattern 2: Optional Variable (Non-Blocking)",
  "id": "pattern-2-optional-variable-non-blocking",
  "level": 3
}, {
  "value": "Pattern 3: Variable with Default",
  "id": "pattern-3-variable-with-default",
  "level": 3
}, {
  "value": "Verification Checklist",
  "id": "verification-checklist",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Issue: &quot;Bad credentials&quot; (401 Error)",
  "id": "issue-bad-credentials-401-error",
  "level": 3
}, {
  "value": "Issue: &quot;Tag not found&quot; (500 Error)",
  "id": "issue-tag-not-found-500-error",
  "level": 3
}, {
  "value": "Issue: Token Not Available in Agent Sandbox",
  "id": "issue-token-not-available-in-agent-sandbox",
  "level": 3
}, {
  "value": "Security Best Practices",
  "id": "security-best-practices",
  "level": 2
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
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
        id: "standard-operating-procedure-environment-variables",
        children: "Standard Operating Procedure: Environment Variables"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-20", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework:"
      }), " Workflow Management Framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "release-workflow-agent-execution.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_github_release.py"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "upload_to_github_release.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This SOP defines the standard procedure for managing environment variables required by AI Dev Kit workflows and scripts. It provides clear guidance on which variables are needed, how to set them, and how to verify they are configured correctly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " Environment variables should be documented, validated, and provide clear error messages when missing. Scripts should gracefully handle missing variables and provide helpful instructions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why This SOP Exists:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures consistent environment variable usage across all workflows and scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides clear setup instructions for developers and CI/CD systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents silent failures due to missing environment variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables proper error handling and user guidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This SOP Covers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required environment variables for each workflow/script"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How to set environment variables (temporary vs permanent)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How to verify environment variables are set correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error handling patterns for missing variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security considerations for sensitive variables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This SOP Does NOT Cover:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD secret management (GitHub Actions secrets, etc.) - covered in CI/CD documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local development environment setup - covered in development guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework installation - covered in framework installation guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "required-environment-variables",
      children: "Required Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "github_token",
      children: "GITHUB_TOKEN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " GitHub Personal Access Token (PAT) for authenticating with GitHub API."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Used By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow (RW) Step 12.5: Create/Update GitHub Release"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package upload scripts (", (0,jsx_runtime.jsx)(_components.code, {
          children: "upload_to_github_release.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "upload_all_packages.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub release creation script (", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_github_release.py"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Scopes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " (full control of private repositories)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Required for: Creating/updating releases, uploading release assets"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Generate:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click \"Generate new token (classic)\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Give it a descriptive name (e.g., \"AI Dev Kit Release Workflow\")"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " scope"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click \"Generate token\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy the token immediately"
        }), " (you won't be able to see it again)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Set (Temporary - Current Shell Session):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "export GITHUB_TOKEN=your_token_here\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Set (Permanent - macOS/Linux):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add to ~/.zshrc or ~/.bashrc\necho 'export GITHUB_TOKEN=your_token_here' >> ~/.zshrc\nsource ~/.zshrc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Set (Permanent - Windows PowerShell):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-powershell",
        children: "[System.Environment]::SetEnvironmentVariable('GITHUB_TOKEN', 'your_token_here', 'User')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Verify:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "echo $GITHUB_TOKEN\n# Should output your token (be careful in shared environments)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Notes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER commit tokens to version control"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER share tokens in chat logs or screenshots"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rotate tokens periodically"
        }), " (GitHub → Settings → Developer settings → Personal access tokens)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Use least-privilege scopes"
        }), " (only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " scope needed, not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "admin"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scripts should check for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GITHUB_TOKEN"
        }), " before making API calls"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If missing, provide clear error message with setup instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-blocking workflows (like RW Step 12.5) should skip gracefully with instructions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "github_repository",
      children: "GITHUB_REPOSITORY"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " GitHub repository identifier in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "owner/repo"
      }), " format."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Used By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow (RW) Step 12.5: Create/Update GitHub Release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package upload scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub release creation script"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default Value:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If not set, scripts default to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Can be overridden via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--repo"
        }), " command-line argument"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Set:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "export GITHUB_REPOSITORY=RMS-Ltd/ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Verify:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "echo $GITHUB_REPOSITORY\n# Should output: RMS-Ltd/ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " This is optional for ai-dev-kit (has default), but required for other projects using these scripts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-specific-requirements",
      children: "Workflow-Specific Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-rw",
      children: "Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 12.5: Create/Update GitHub Release"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Variables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GITHUB_TOKEN"
        }), " (required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GITHUB_REPOSITORY"
        }), " (optional, defaults to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Checks for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GITHUB_TOKEN"
        }), " before running script"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If missing: Skips step with warning and manual instructions (non-blocking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If present: Creates/updates GitHub release using SemVer tag"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If API error: Logs error and provides instructions (non-blocking)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Execution (if automated step skipped):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/create_github_release.py\" \\\n  --semver-tag \"v0.4.36+1\" \\\n  --internal-version \"v0.4.16.4+1\" \\\n  --summary \"Release summary\" \\\n  --epic \"4\" --story \"16\" --task \"4\" \\\n  --repo \"RMS-Ltd/ai-dev-kit\" \\\n  --token \"$GITHUB_TOKEN\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-upload-workflow",
      children: "Package Upload Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Variables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GITHUB_TOKEN"
        }), " (required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GITHUB_REPOSITORY"
        }), " (optional, defaults to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "upload_to_github_release.py"
        }), " - Upload individual package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "upload_all_packages.py"
        }), " - Upload all packages at once"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "build_and_upload_all.py"
        }), " - Build and upload all packages"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "export GITHUB_TOKEN=your_token_here\nexport GITHUB_REPOSITORY=RMS-Ltd/ai-dev-kit  # Optional\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test with dry-run\npython \"packages/frameworks/workflow-mgt/scripts/upload_all_packages.py\" \\\n  --dry-run \\\n  --token \"$GITHUB_TOKEN\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "error-handling-patterns",
      children: "Error Handling Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-1-required-variable-blocking",
      children: "Pattern 1: Required Variable (Blocking)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Variable is required for script to function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "github_token = os.environ.get('GITHUB_TOKEN')\nif not github_token:\n    print(\"❌ Error: GITHUB_TOKEN required (set via export GITHUB_TOKEN=...)\", file=sys.stderr)\n    print(\"\\n📋 Setup Instructions:\")\n    print(\"   1. Generate token: GitHub Settings → Developer settings → Personal access tokens\")\n    print(\"   2. Select 'repo' scope\")\n    print(\"   3. Set: export GITHUB_TOKEN=your_token_here\")\n    sys.exit(1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-2-optional-variable-non-blocking",
      children: "Pattern 2: Optional Variable (Non-Blocking)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Variable is optional, workflow can continue without it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "github_token = os.environ.get('GITHUB_TOKEN')\nif not github_token:\n    print(\"⚠️  Warning: GITHUB_TOKEN not set. Skipping GitHub release creation.\")\n    print(\"\\n📋 To create GitHub release manually, run:\")\n    print(f\"   python script.py --token $GITHUB_TOKEN ...\")\n    return \"skipped\"  # Mark as skipped, not failed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-3-variable-with-default",
      children: "Pattern 3: Variable with Default"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Variable has a sensible default value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "repo = os.environ.get('GITHUB_REPOSITORY', 'RMS-Ltd/ai-dev-kit')\n# Use repo variable (will use default if env var not set)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification-checklist",
      children: "Verification Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before running workflows that require environment variables:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "GITHUB_TOKEN:"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          className: "contains-task-list",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Token generated with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "repo"
            }), " scope"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Token set in environment (", (0,jsx_runtime.jsx)(_components.code, {
              children: "echo $GITHUB_TOKEN"
            }), " shows value)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Token not expired (check GitHub Settings)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Token has correct permissions (test with dry-run)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "GITHUB_REPOSITORY (if needed):"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          className: "contains-task-list",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Set to correct ", (0,jsx_runtime.jsx)(_components.code, {
              children: "owner/repo"
            }), " format"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Repository exists and is accessible"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Token has access to repository"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verification Test:"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          className: "contains-task-list",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Run script with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--dry-run"
            }), " flag (if available)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Check for clear error messages if variables missing"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Verify script can authenticate with GitHub API"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-bad-credentials-401-error",
      children: "Issue: \"Bad credentials\" (401 Error)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script returns 401 \"Bad credentials\" error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub API requests fail"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token expired or revoked"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Token missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repo"
        }), " scope"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token copied incorrectly (extra spaces, missing characters)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token belongs to different GitHub account"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Regenerate Token:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Go to GitHub Settings → Developer settings → Personal access tokens"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Revoke old token (if exists)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Generate new token with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "repo"
            }), " scope"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "export GITHUB_TOKEN=new_token_here"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify Token Scope:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Check token has ", (0,jsx_runtime.jsx)(_components.code, {
              children: "repo"
            }), " scope (full control of private repositories)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Regenerate if scope is incorrect"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify Token Format:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Check for extra spaces: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "echo \"$GITHUB_TOKEN\" | wc -c"
            }), " (should match token length)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Re-copy token from GitHub if needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Token:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "curl -H \"Authorization: Bearer $GITHUB_TOKEN\" https://api.github.com/user\n# Should return your GitHub user info\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-tag-not-found-500-error",
      children: "Issue: \"Tag not found\" (500 Error)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script returns 500 error when creating GitHub release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error message mentions tag not found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag doesn't exist on GitHub remote yet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag was created locally but not pushed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag name mismatch (typo in tag name)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Push Tags First:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git push origin main --tags\n# Wait for push to complete, then retry release creation\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify Tag Exists:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git ls-remote --tags origin | grep v0.4.36+1\n# Should show the tag if it exists on remote\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Check Tag Name:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify tag name matches exactly (case-sensitive)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check for typos in SemVer tag format"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-token-not-available-in-agent-sandbox",
      children: "Issue: Token Not Available in Agent Sandbox"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 12.5 skips with \"GITHUB_TOKEN not set\" warning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent's shell environment doesn't have access to user's token"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent's shell session is separate from user's IDE terminal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Environment variables set in user's terminal don't propagate to agent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is expected behavior - agent cannot access user's environment variables"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User must run GitHub release creation manually:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python \"packages/frameworks/workflow-mgt/scripts/create_github_release.py\" \\\n  --semver-tag \"v0.4.36+1\" \\\n  --internal-version \"v0.4.16.4+1\" \\\n  --summary \"Release summary\" \\\n  --epic \"4\" --story \"16\" --task \"4\" \\\n  --repo \"RMS-Ltd/ai-dev-kit\" \\\n  --token \"$GITHUB_TOKEN\"\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-best-practices",
      children: "Security Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Never Commit Tokens:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*.env"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".gitignore"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Never commit tokens in code, config files, or documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use environment variables or secret management systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Least-Privilege Scopes:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Only grant ", (0,jsx_runtime.jsx)(_components.code, {
              children: "repo"
            }), " scope (not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "admin"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "delete_repo"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create separate tokens for different purposes if needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rotate Tokens Periodically:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Set calendar reminder to rotate tokens every 90 days"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Revoke old tokens when creating new ones"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update environment variables when rotating"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Protect Token in Shared Environments:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't echo token in shared terminals or screenshots"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--token"
            }), " flag instead of environment variable in CI/CD"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use secret management (GitHub Secrets, etc.) in CI/CD"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitor Token Usage:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check GitHub Settings → Developer settings → Personal access tokens for last used date"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Revoke unused tokens"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Investigate unexpected usage"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " (Step 12.5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Release Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/create_github_release.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Upload Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/UPLOAD_PACKAGES.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build and Upload Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/BUILD_AND_UPLOAD.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Token Setup:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",
          children: "GitHub Documentation"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-20", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0"]
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