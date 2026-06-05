"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["92697"], {
62290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_guides_framework_consumption_adk_feedback_guide_md_e94_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-guides-framework-consumption-adk-feedback-guide-md-e94.json
var site_docs_guides_framework_consumption_adk_feedback_guide_md_e94_namespaceObject = JSON.parse('{"id":"guides/framework-consumption/adk-feedback-guide","title":"AI Dev Kit Feedback Guide","description":"Status: Active","source":"@site/../docs/guides/framework-consumption/adk-feedback-guide.md","sourceDirName":"guides/framework-consumption","slug":"/guides/framework-consumption/adk-feedback-guide","permalink":"/ai-dev-kit/docs/guides/framework-consumption/adk-feedback-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/guides/framework-consumption/adk-feedback-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Consumption","permalink":"/ai-dev-kit/docs/guides/framework-consumption/"},"next":{"title":"Getting Started","permalink":"/ai-dev-kit/docs/guides/getting-started/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/guides/framework-consumption/adk-feedback-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'AI Dev Kit Feedback Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Why Provide Feedback?",
  "id": "why-provide-feedback",
  "level": 2
}, {
  "value": "How to Provide Feedback",
  "id": "how-to-provide-feedback",
  "level": 2
}, {
  "value": "Option 1: CLI Command (Recommended)",
  "id": "option-1-cli-command-recommended",
  "level": 3
}, {
  "value": "Option 2: GitHub Issue",
  "id": "option-2-github-issue",
  "level": 3
}, {
  "value": "Option 3: Direct Contact",
  "id": "option-3-direct-contact",
  "level": 3
}, {
  "value": "Feedback Categories",
  "id": "feedback-categories",
  "level": 2
}, {
  "value": "1. Installation Experience",
  "id": "1-installation-experience",
  "level": 3
}, {
  "value": "2. Post-Installation State",
  "id": "2-post-installation-state",
  "level": 3
}, {
  "value": "3. Framework Usability",
  "id": "3-framework-usability",
  "level": 3
}, {
  "value": "4. Issues Encountered",
  "id": "4-issues-encountered",
  "level": 3
}, {
  "value": "Feedback Template",
  "id": "feedback-template",
  "level": 2
}, {
  "value": "What Happens to Your Feedback?",
  "id": "what-happens-to-your-feedback",
  "level": 2
}, {
  "value": "Tips for Effective Feedback",
  "id": "tips-for-effective-feedback",
  "level": 2
}, {
  "value": "Privacy and Confidentiality",
  "id": "privacy-and-confidentiality",
  "level": 2
}, {
  "value": "Questions?",
  "id": "questions",
  "level": 2
}, {
  "value": "Thank You!",
  "id": "thank-you",
  "level": 2
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
        id: "ai-dev-kit-feedback-guide",
        children: "AI Dev Kit Feedback Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your feedback helps us improve the AI Dev Kit framework. This guide explains how to provide feedback on your installation experience, framework usability, and any issues you encounter."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-provide-feedback",
      children: "Why Provide Feedback?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Your feedback helps us:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve installation processes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhance framework usability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix bugs and issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify missing features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "We value:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Honest, constructive feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detailed issue reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suggestions for improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your time and effort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-provide-feedback",
      children: "How to Provide Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-1-cli-command-recommended",
      children: "Option 1: CLI Command (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After installation, run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "adk logs prepare-feedback-payload\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The command prints the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Dev Kit SemVer"
      }), " banner (same as install) and packages install telemetry. The payload ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.adk_semver"
      }), " field matches the version shown during install (UXR-016)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will guide you through a structured feedback form covering:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Post-installation state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework usability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issues encountered"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-2-github-issue",
      children: "Option 2: GitHub Issue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create an issue in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/your-org/ai-dev-kit",
        children: "AI Dev Kit repository"
      }), " using the feedback template."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option-3-direct-contact",
      children: "Option 3: Direct Contact"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For critical issues or private feedback, contact the maintainers directly."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "feedback-categories",
      children: "Feedback Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-installation-experience",
      children: "1. Installation Experience"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tell us about your installation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How easy was the installation? (1-5 scale)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How long did it take?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Were the instructions clear?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Did you encounter any errors?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What was your overall experience?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Installation Ease: 4/5\nInstallation Time: 5 minutes\nInstructions: Clear and helpful\nErrors: None\nOverall: Smooth installation process\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-post-installation-state",
      children: "2. Post-Installation State"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Describe what your project looks like after installation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What files/directories were created?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is the project structure as expected?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Were all expected files present?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Was initial configuration successful?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Files Created:\n- docs/project-management/kanban/\n- packages/frameworks/\n- scripts/\n- rw-config.yaml\n\nStructure: Matches documentation\nFiles: All expected files present\nConfiguration: Successful\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-framework-usability",
      children: "3. Framework Usability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Share your experience using the framework:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How easy is the framework to use? (1-5 scale)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is the documentation clear?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do you understand the workflows?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are the tools intuitive?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is your learning curve?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ease of Use: 4/5\nDocumentation: Clear and comprehensive\nWorkflows: Easy to understand\nTools: Intuitive and helpful\nLearning Curve: Moderate, well-supported\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-issues-encountered",
      children: "4. Issues Encountered"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report any problems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bugs you encountered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error messages you saw"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unexpected behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation gaps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bugs: None encountered\nErrors: None\nUnexpected Behavior: None\nMissing Features: Would like X feature\nDocumentation Gaps: Need more examples for Y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "feedback-template",
      children: "Feedback Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use this template for structured feedback:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Installation Experience\n- Ease: [1-5]\n- Time: [minutes]\n- Issues: [description]\n- Errors: [error messages]\n\n## Post-Installation State\n- Files Created: [list]\n- Structure: [description]\n- Configuration: [status]\n\n## Framework Usability\n- Ease of Use: [1-5]\n- Documentation: [rating]\n- Workflows: [understanding level]\n- Tools: [usability rating]\n\n## Issues Encountered\n- Bugs: [list]\n- Errors: [list]\n- Unexpected Behavior: [description]\n- Missing Features: [list]\n- Documentation Gaps: [list]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-happens-to-your-feedback",
      children: "What Happens to Your Feedback?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Collection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your feedback is collected and stored securely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anonymous feedback is welcome (no personal info required)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "We analyze feedback for patterns and trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "We prioritize issues based on impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "We extract actionable insights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Integration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feedback becomes Feature Requests (FR) or Bug Reports (BR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issues are tracked in our Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvements are planned and implemented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Communication"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "We communicate improvements based on feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "We track feedback resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "We share insights with the community"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips-for-effective-feedback",
      children: "Tips for Effective Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Be Specific:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide detailed descriptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include error messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share screenshots if helpful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe steps to reproduce issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Be Constructive:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suggest solutions if possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be respectful"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Be Timely:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide feedback soon after installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report issues as soon as you encounter them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share usability feedback as you use the framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "privacy-and-confidentiality",
      children: "Privacy and Confidentiality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "We respect your privacy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anonymous feedback is welcome"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Personal information is optional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensitive information is handled securely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feedback is used only for improvement purposes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "questions",
      children: "Questions?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If you have questions about feedback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/your-org/ai-dev-kit/docs",
          children: "documentation"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/your-org/ai-dev-kit/docs/faq",
          children: "FAQ"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contact maintainers directly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a GitHub issue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thank-you",
      children: "Thank You!"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your feedback is invaluable in helping us improve the AI Dev Kit framework. Thank you for taking the time to share your experience!"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feedback Mechanism Design:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/pre-release-feedback-mechanism-design.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feedback Template:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/feedback-template.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Repository:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/your-org/ai-dev-kit",
          children: "AI Dev Kit"
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