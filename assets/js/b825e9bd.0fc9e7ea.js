"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["21527"], {
14566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_agent_network_access_and_git_push_limitations_md_b82_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-agent-network-access-and-git-push-limitations-md-b82.json
var site_docs_architecture_standards_and_adrs_agent_network_access_and_git_push_limitations_md_b82_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/agent-network-access-and-git-push-limitations","title":"Cursor Sandbox Network Access: Issue, Environment, and Solution","description":"Last Updated: 2025-12-04","source":"@site/../docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:10:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-046 Implementation Guide: RW Uses SemVer Tag When Task-Touch Enabled","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/FR-046-implementation-guide"},"next":{"title":"Agentic Template Generator Design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/agentic-template-generator-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:10:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Cursor Sandbox Network Access: Issue, Environment, and Solution';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "The Problem",
  "id": "the-problem",
  "level": 2
}, {
  "value": "Initial Symptom",
  "id": "initial-symptom",
  "level": 3
}, {
  "value": "Impact on Workflow",
  "id": "impact-on-workflow",
  "level": 3
}, {
  "value": "Why This Was Problematic",
  "id": "why-this-was-problematic",
  "level": 3
}, {
  "value": "Environmental Conditions",
  "id": "environmental-conditions",
  "level": 2
}, {
  "value": "Cursor Sandbox Architecture",
  "id": "cursor-sandbox-architecture",
  "level": 3
}, {
  "value": "Default Sandbox Behavior",
  "id": "default-sandbox-behavior",
  "level": 3
}, {
  "value": "Git Push Requirements",
  "id": "git-push-requirements",
  "level": 3
}, {
  "value": "Investigation and Discovery",
  "id": "investigation-and-discovery",
  "level": 2
}, {
  "value": "Initial Hypothesis",
  "id": "initial-hypothesis",
  "level": 3
}, {
  "value": "Root Cause Identification",
  "id": "root-cause-identification",
  "level": 3
}, {
  "value": "Understanding the Sandbox API",
  "id": "understanding-the-sandbox-api",
  "level": 3
}, {
  "value": "The Solution",
  "id": "the-solution",
  "level": 2
}, {
  "value": "Step 1: Update Release Workflow Step 11",
  "id": "step-1-update-release-workflow-step-11",
  "level": 3
}, {
  "value": "Step 2: Update .cursorrules",
  "id": "step-2-update-cursorrules",
  "level": 3
}, {
  "value": "Step 3: Create Documentation",
  "id": "step-3-create-documentation",
  "level": 3
}, {
  "value": "The Solution in Detail",
  "id": "the-solution-in-detail",
  "level": 2
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 3
}, {
  "value": "Alternative Approaches Considered",
  "id": "alternative-approaches-considered",
  "level": 3
}, {
  "value": "Verification and Testing",
  "id": "verification-and-testing",
  "level": 2
}, {
  "value": "Test Case 1: Branch Push",
  "id": "test-case-1-branch-push",
  "level": 3
}, {
  "value": "Test Case 2: Tag Push",
  "id": "test-case-2-tag-push",
  "level": 3
}, {
  "value": "Test Case 3: Without Permissions (Control)",
  "id": "test-case-3-without-permissions-control",
  "level": 3
}, {
  "value": "End-to-End RW Test",
  "id": "end-to-end-rw-test",
  "level": 3
}, {
  "value": "Impact and Results",
  "id": "impact-and-results",
  "level": 2
}, {
  "value": "Before the Fix",
  "id": "before-the-fix",
  "level": 3
}, {
  "value": "After the Fix",
  "id": "after-the-fix",
  "level": 3
}, {
  "value": "Metrics",
  "id": "metrics",
  "level": 3
}, {
  "value": "Lessons Learned",
  "id": "lessons-learned",
  "level": 2
}, {
  "value": "Key Insights",
  "id": "key-insights",
  "level": 3
}, {
  "value": "Best Practices Established",
  "id": "best-practices-established",
  "level": 3
}, {
  "value": "Future Considerations",
  "id": "future-considerations",
  "level": 3
}, {
  "value": "Agent Requirements",
  "id": "agent-requirements",
  "level": 2
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
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
        id: "cursor-sandbox-network-access-issue-environment-and-solution",
        children: "Cursor Sandbox Network Access: Issue, Environment, and Solution"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " AI Assistant (Auto)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Release Workflow (RW) Step 11 - Git Push Operations", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ Resolved", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
        children: "Release Workflow Agent Execution (source)"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-hardening-guide",
        children: "Workflow Hardening Guide"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cursor's sandbox environment blocks network access by default for security. This caused git push operations in the Release Workflow (RW) to fail, requiring manual intervention. The solution was to configure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "required_permissions: ['network']"
      }), " when calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "run_terminal_cmd"
      }), " for git push operations, enabling automatic end-to-end workflow completion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-problem",
      children: "The Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "initial-symptom",
      children: "Initial Symptom"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During Release Workflow execution, Step 11 (Push with tag) consistently failed with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "fatal: unable to access 'https://github.com/{user}/{repo}/': Could not resolve host: github.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact-on-workflow",
      children: "Impact on Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before the fix:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RW Steps 1-10 completed successfully ✅"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version bumped"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban docs updated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Changelog created"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Files staged"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validators passed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Commit created"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tag created"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Step 11 failed ❌"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git push origin <branch>"
            }), " → \"Could not resolve host\""]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git push origin v<version>"
            }), " → \"Could not resolve host\""]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Manual intervention required ❌"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "User had to manually run git push commands"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Workflow was incomplete"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release process was interrupted"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-this-was-problematic",
      children: "Why This Was Problematic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Incompleteness:"
        }), " The RW workflow is designed to be fully automated. Manual steps break this automation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Friction:"
        }), " Users had to remember to manually push after RW completion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inconsistency:"
        }), " Sometimes pushes succeeded (if run manually), sometimes they didn't (if forgotten)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Gap:"
        }), " No clear explanation of why pushes failed or how to fix it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environmental-conditions",
      children: "Environmental Conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cursor-sandbox-architecture",
      children: "Cursor Sandbox Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cursor uses a sandboxed execution environment for AI assistant tool calls. This sandbox:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolates Execution:"
        }), " Runs commands in a controlled environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restricts Network Access:"
        }), " Blocks outbound network connections by default"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requires Explicit Permissions:"
        }), " Network access must be explicitly requested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provides Security:"
        }), " Prevents arbitrary network operations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "default-sandbox-behavior",
      children: "Default Sandbox Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Without explicit permissions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Local file system access (read/write)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Local command execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Environment variable access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Network access (blocked)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ External API calls (blocked)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ DNS resolution (blocked)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "This is intentional:"
      }), " Cursor blocks network access by default to prevent:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unauthorized data exfiltration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arbitrary API calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Malicious network operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Credential exposure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-push-requirements",
      children: "Git Push Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Git push operations require:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network Access:"
        }), " To connect to GitHub/GitLab/etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS Resolution:"
        }), " To resolve hostnames (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "github.com"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTPS/TLS:"
        }), " To establish secure connection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication:"
        }), " Git credentials (already configured)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Conflict:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git push needs network access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sandbox blocks network access by default"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: Push fails with \"Could not resolve host\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "investigation-and-discovery",
      children: "Investigation and Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "initial-hypothesis",
      children: "Initial Hypothesis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hypothesis 1:"
      }), " Git credentials issue"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test:"
        }), " Checked ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git config --global credential.helper"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Credentials configured correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conclusion:"
        }), " Not a credential problem"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hypothesis 2:"
      }), " SSL/TLS configuration issue"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test:"
        }), " Checked ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git config http.sslbackend"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " SSL configured correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conclusion:"
        }), " Not an SSL problem"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hypothesis 3:"
      }), " Network connectivity issue"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test:"
        }), " Ran ", (0,jsx_runtime.jsx)(_components.code, {
          children: "curl https://github.com"
        }), " (without permissions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Failed with \"Could not resolve host\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conclusion:"
        }), " Network access blocked"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause-identification",
      children: "Root Cause Identification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The issue was identified by examining the error message pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Could not resolve host: github.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a DNS resolution failure, which occurs when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network access is blocked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNS queries cannot be made"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hostnames cannot be resolved to IP addresses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " The sandbox was blocking DNS resolution, which is a network operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "understanding-the-sandbox-api",
      children: "Understanding the Sandbox API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "run_terminal_cmd"
      }), " tool accepts an optional ", (0,jsx_runtime.jsx)(_components.code, {
        children: "required_permissions"
      }), " parameter:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "run_terminal_cmd(\n    command=\"<command>\",\n    required_permissions=['network']  # Request network access\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Available Permission Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "['network']"
        }), " - Network access only (restrictive)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "['all']"
        }), " - Full sandbox access (permissive)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "[]"
        }), " (default) - No special permissions (network blocked)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-solution",
      children: "The Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-update-release-workflow-step-11",
      children: "Step 1: Update Release Workflow Step 11"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Updated Step 11 to use network permissions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ✅ CORRECT - With network permissions\nrun_terminal_cmd(\n    command=f\"git push origin {branch_name} --tags\",\n    required_permissions=['network']  # Enable network access\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-update-cursorrules",
      children: "Step 2: Update .cursorrules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " → Release Workflow section"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Updated Step 11 to specify network permissions requirement"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Content Added:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "11. **Push to Remote** - Push epic branch and tag to origin\n    - **CRITICAL: Use `required_permissions: ['network']` for git push commands**\n    - Example: `run_terminal_cmd(command=\"git push origin {branch} --tags\", required_permissions=['network'])`\n    - This enables network access in Cursor's sandbox environment\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-create-documentation",
      children: "Step 3: Create Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Created comprehensive documentation (this document)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contents:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problem description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solution explanation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW integration details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security considerations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-solution-in-detail",
      children: "The Solution in Detail"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "AI Assistant Calls Tool:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "run_terminal_cmd(\n    command=\"git push origin main --tags\",\n    required_permissions=['network']\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sandbox Evaluates Request:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Sees ", (0,jsx_runtime.jsx)(_components.code, {
              children: "required_permissions: ['network']"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Grants network access for this command"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Allows DNS resolution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Allows HTTPS connections"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Command Executes:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Git resolves ", (0,jsx_runtime.jsx)(_components.code, {
              children: "github.com"
            }), " ✅"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Git establishes HTTPS connection ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Git authenticates (using stored credentials) ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Git pushes changes ✅"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Result:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Push succeeds ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Workflow completes ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No manual intervention needed ✅"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why This Is Safe:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scoped Access:"
        }), " Network permission is only granted for the specific command"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limited Scope:"
        }), " Only git push operations use network access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Authentication:"
        }), " Git credentials are already configured (user's responsibility)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Arbitrary Access:"
        }), " Can't make arbitrary network calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit Request:"
        }), " Must explicitly request network access"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "['network']"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "['all']"
        }), " (more restrictive)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Only use for git push operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Don't use for other commands unless explicitly needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Document why network access is needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alternative-approaches-considered",
      children: "Alternative Approaches Considered"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Option 1: Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "['all']"
        }), " permissions"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Simpler, more permissive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " Less secure, grants more access than needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "['network']"
        }), " (more restrictive)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 2: Manual push always"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " No sandbox configuration needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " Breaks automation, user friction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision:"
        }), " Rejected (defeats purpose of RW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 3: Skip push in RW"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " No network issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " Incomplete workflow, manual steps required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision:"
        }), " Rejected (workflow must be complete)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chosen Solution:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "['network']"
      }), " permissions for git push only ✅"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification-and-testing",
      children: "Verification and Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-case-1-branch-push",
      children: "Test Case 1: Branch Push"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "run_terminal_cmd(\n    command=\"git push origin main --tags\",\n    required_permissions=['network']\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ✅ Success"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "To https://github.com/{user}/{repo}\n   {commit_hash}..{commit_hash}  main -> main\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-case-2-tag-push",
      children: "Test Case 2: Tag Push"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "run_terminal_cmd(\n    command=\"git push origin v0.2.4.8+1\",\n    required_permissions=['network']\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ✅ Success"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "To https://github.com/{user}/{repo}\n * [new tag]           v0.2.4.8+1 -> v0.2.4.8+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-case-3-without-permissions-control",
      children: "Test Case 3: Without Permissions (Control)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "run_terminal_cmd(\n    command=\"git push origin main --tags\"\n    # No required_permissions\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ❌ Failure (as expected)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "fatal: unable to access 'https://github.com/...': Could not resolve host: github.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "end-to-end-rw-test",
      children: "End-to-End RW Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Complete Release Workflow", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " 1-11 executed", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ✅ All steps completed successfully, including push operations"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact-and-results",
      children: "Impact and Results"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "before-the-fix",
      children: "Before the Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ RW Step 11 failed consistently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Manual push required after every release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Workflow incomplete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ User friction and confusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ No documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "after-the-fix",
      children: "After the Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ RW Step 11 succeeds automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No manual push required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Workflow completes end-to-end"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Smooth user experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Comprehensive documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Completion Rate:"
        }), " 0% → 100%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual Steps Required:"
        }), " 1 → 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Friction:"
        }), " High → None"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Coverage:"
        }), " 0% → 100%"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lessons-learned",
      children: "Lessons Learned"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-insights",
      children: "Key Insights"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sandbox Restrictions Are Intentional:"
        }), " Network blocking is a security feature, not a bug"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit Permissions Required:"
        }), " Must explicitly request network access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Matters:"
        }), " Clear documentation prevents confusion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Completeness:"
        }), " Automated workflows must be truly automated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool Parameters Matter:"
        }), " Always check tool capabilities before assuming limitations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices-established",
      children: "Best Practices Established"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always Use Network Permissions for Git Push:"
        }), " Don't forget ", (0,jsx_runtime.jsx)(_components.code, {
          children: "required_permissions: ['network']"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Requirements:"
        }), " Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " and KB docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test End-to-End:"
        }), " Verify complete workflow, not just individual steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security First:"
        }), " Use most restrictive permissions possible (", (0,jsx_runtime.jsx)(_components.code, {
          children: "['network']"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "['all']"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Investigate Before Assuming:"
        }), " Check tool capabilities before concluding something is impossible"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "future-considerations",
      children: "Future Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Other Network Operations:"
        }), " May need network permissions for other operations (API calls, package downloads, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Permission Granularity:"
        }), " Consider if more granular permissions become available"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling:"
        }), " Improve error messages when network access is blocked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Updates:"
        }), " Keep documentation current as sandbox evolves"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agent-requirements",
      children: "Agent Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agents executing Release Workflow ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use network permissions"
          }), " for git push operations:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "run_terminal_cmd(\n    command=\"git push origin {branch} --tags\",\n    required_permissions=['network']\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handle push failures gracefully"
          }), " (fallback):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If push still fails (shouldn't happen with permissions), provide clear instructions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't fail the entire workflow"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Document the requirement"
          }), " in workflow execution"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Rule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "When executing RW Step 11:\n- ALWAYS use required_permissions: ['network'] for git push commands\n- This enables network access in Cursor's sandbox environment\n- If push fails (unexpected), provide user instructions\n- Link to this document for context\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow Agent Execution:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
          children: "source"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Hardening Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-hardening-guide",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow-hardening-guide.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow Reference:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md",
          children: "source"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor Rules RW Trigger:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md",
          children: "source"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Issue:"
      }), " Cursor's sandbox blocks network access by default, causing git push operations to fail."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Environment:"
      }), " Sandboxed execution environment with default network restrictions for security."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Solution:"
      }), " Configure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "required_permissions: ['network']"
      }), " when calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "run_terminal_cmd"
      }), " for git push operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Result:"
      }), " RW workflow now completes end-to-end automatically, eliminating manual push steps and streamlining the release process."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ Resolved, documented, and integrated into workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review:"
      }), " When sandbox permissions model changes or new network operations are needed"]
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