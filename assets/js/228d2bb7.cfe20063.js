"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["9755"], {
4154(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_06_05_getting_docusaurus_working_index_md_228_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2026_06_05_getting_docusaurus_working_index_md_228_json__rspack_import_0 = __webpack_require__(9777);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(4848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(8453);


const frontMatter = {
	slug: 'getting-docusaurus-working',
	title: 'Getting Docusaurus Working',
	authors: [
		'adk'
	],
	tags: [
		'docusaurus'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};

/*truncate*/


const toc = [{
  "value": "What we were building",
  "id": "what-we-were-building",
  "level": 2
}, {
  "value": "Local quick start",
  "id": "local-quick-start",
  "level": 2
}, {
  "value": "Failure class 1 — missing <code>@docusaurus/faster</code>",
  "id": "failure-class-1--missing-docusaurusfaster",
  "level": 2
}, {
  "value": "Failure class 2 — links that leave the docs plugin",
  "id": "failure-class-2--links-that-leave-the-docs-plugin",
  "level": 2
}, {
  "value": "Failure class 3 — broken anchors and MDX surprises",
  "id": "failure-class-3--broken-anchors-and-mdx-surprises",
  "level": 2
}, {
  "value": "Failure class 4 — local green, CI red",
  "id": "failure-class-4--local-green-ci-red",
  "level": 2
}, {
  "value": "CI and deploy topology",
  "id": "ci-and-deploy-topology",
  "level": 2
}, {
  "value": "A sane workflow for maintainers",
  "id": "a-sane-workflow-for-maintainers",
  "level": 2
}, {
  "value": "What &quot;done&quot; looks like",
  "id": "what-done-looks-like",
  "level": 2
}, {
  "value": "Further reading",
  "id": "further-reading",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["We spent several weeks getting the AI Dev Kit documentation portal to ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "npm run build"
        }), " exit 0"]
      }), " under strict link checking, then shipped it to GitHub Pages. This post is a practical field guide — not a hello-world tutorial — for teams publishing a ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
        children: ["monorepo ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "docs/"
        }), " tree"]
      }), " with Docusaurus 3.x."]
    }), "\n", "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "what-we-were-building",
      children: "What we were building"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The site lives in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/portal",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "portal/"
        })
      }), " and publishes markdown from the repository ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs",
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "docs/"
        })
      }), " tree. That keeps a single source of truth for agents, maintainers, and readers."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Key config choices:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Docs plugin root:"
        }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "../docs"
        }), " (monorepo corpus, not ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "portal/docs"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Strict gates:"
        }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "onBrokenLinks"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "onBrokenMarkdownLinks"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "onBrokenAnchors"
        }), " all set to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "throw"
          })
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Hosting:"
        }), " GitHub Pages at ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://rms-ltd.github.io/ai-dev-kit/",
          children: "rms-ltd.github.io/ai-dev-kit"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Search:"
        }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@easyops-cn/docusaurus-search-local"
        }), " (offline index, no Algolia)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If your build passes locally with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "warn"
      }), " but fails in CI with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "throw"
      }), ", you have not finished the job yet."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "local-quick-start",
      children: "Local quick start"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "cd portal\nnpm ci\nnpm run start    # dev server → http://localhost:3000/ai-dev-kit/\nnpm run build    # production build (must exit 0 before merge)\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Node 20+"
      }), " matches our CI runner. After any Dependabot lockfile change, always run ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "npm ci"
        })
      }), " (not ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm install"
      }), ") before trusting a build."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h2, {
      id: "failure-class-1--missing-docusaurusfaster",
      children: ["Failure class 1 — missing ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@docusaurus/faster"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Dependabot bumped ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@docusaurus/core"
      }), " to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "3.10.1"
      }), " while ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "package.json"
      }), " still pinned ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "3.9.2"
      }), ", and our config had ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "future: { v4: true }"
      }), ". Docusaurus 3.10 then required ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@docusaurus/faster"
        })
      }), ", which was not installed."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Typical error:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-text",
        children: "To enable Docusaurus Faster options, your site must add the @docusaurus/faster package\nCannot find package '@docusaurus/faster' ...\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Fix:"
      }), " align ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "all"
      }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@docusaurus/*"
      }), " pins in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "package.json"
      }), " and regenerate ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "package-lock.json"
      }), ", then add ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@docusaurus/faster"
      }), " at the same version. Re-run ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "npm ci && npm run build"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Lesson: treat Docusaurus as a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "pinned set"
      }), ", not independent packages. A lockfile-only bump without matching ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "package.json"
      }), " is a time bomb."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "failure-class-2--links-that-leave-the-docs-plugin",
      children: "Failure class 2 — links that leave the docs plugin"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The docs plugin only ingests files under ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "docs/"
      }), ". Markdown links like:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-markdown",
        children: "[Install](../../../INSTALL_IN_YOUR_PROJECT.md)\n[Validator](../../../../packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py)\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["look fine in GitHub's file viewer. Docusaurus cannot resolve them as in-corpus doc IDs, and with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "onBrokenMarkdownLinks: 'throw'"
      }), " the build stops."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Fix (Strategy A — BR-068):"
      }), " link to canonical GitHub ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "blob/main/"
      }), " URLs:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-markdown",
        children: "[Install in your project](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For framework paths, use the full repository path after ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/blob/main/"
      }), ". Percent-encode spaces in directory names."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Optional alternative: add a ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
        children: ["short stub page under ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "docs/"
        })]
      }), " when the portal must show in-sidebar content, and link the stub to the GitHub source. Do not maintain two full copies of the same document."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "failure-class-3--broken-anchors-and-mdx-surprises",
      children: "Failure class 3 — broken anchors and MDX surprises"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["With ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "onBrokenAnchors: 'throw'"
      }), ", every ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "#fragment"
      }), " must match a generated heading slug. Renamed headings silently break deep links."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We also hit MDX parse issues from:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Angle brackets in prose (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<N"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<="
        }), ") interpreted as JSX"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Curly-brace placeholders (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "{epic}"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "{PROJECT_NAME}"
        }), ") treated as expressions"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Custom heading syntax ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "{#id}"
        }), " causing acorn parse errors in some contexts"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Fixes that worked:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Escape or rephrase MDX-sensitive tokens outside fenced code blocks"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Align heading text with the slug Docusaurus actually emits"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Remove stale hash fragments when slug alignment is not worth the churn"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Keep automation (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "scripts/escape_mdx_placeholders.py"
        }), ") for repeatable corpus sweeps"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "failure-class-4--local-green-ci-red",
      children: "Failure class 4 — local green, CI red"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The nastiest bug: ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "npm run build"
        }), " passed locally"]
      }), " but failed in GitHub Actions on the same commit."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Root cause: a markdown file under ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "docs/maintenance/logs/"
      }), " was linked from the publish corpus but ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "gitignored"
      }), " by a broad ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "logs/"
      }), " rule. The file existed on a maintainer laptop only."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Fix:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Add a narrow ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".gitignore"
        }), " exception for tracked evidence logs under ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "docs/maintenance/logs/**"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Commit the file"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Re-run CI"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Lesson: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "if it is linked, it must be tracked."
      }), " Strict builds turn \"works on my machine\" into a hard gate — which is the point."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "ci-and-deploy-topology",
      children: "CI and deploy topology"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Our workflow builds on pull requests and on pushes to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "main"
      }), ", then deploys to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "gh-pages"
        })
      }), " only when the build job succeeds. One production build per commit; deploy never runs on a failed build."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Published URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://rms-ltd.github.io/ai-dev-kit/",
          children: "https://rms-ltd.github.io/ai-dev-kit/"
        })
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "docusaurus.config.js"
      }), " must keep ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "url"
      }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "baseUrl"
      }), " aligned with that path (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "baseUrl: '/ai-dev-kit/'"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "a-sane-workflow-for-maintainers",
      children: "A sane workflow for maintainers"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
          children: ["Edit markdown in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "docs/"
          })]
        }), " (or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "portal/blog/"
        }), " for blog posts like this one)."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "cd portal && npm run build"
          })
        }), " before opening a PR."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Fix link class, not config"
        }), " — do not downgrade ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "throw"
        }), " to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "warn"
        }), " to unblock a merge."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dependabot PRs:"
        }), " merge only when the Docusaurus workflow is green; never merge major ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@docusaurus/*"
        }), " downgrades without a deliberate upgrade task."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Optional gate:"
        }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "PORTAL_BUILD_STRICT=1 pytest -m portal_build"
        }), " for automated regression (out-of-plugin link ban, build smoke)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "what-done-looks-like",
      children: "What \"done\" looks like"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For us, \"Docusaurus working\" meant all of the following at once:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "npm run build"
        }), " exit ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "0"
        }), " locally and in CI"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["GitHub Pages deploy green on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "main"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Strict link and anchor checking left enabled"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Monorepo links to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "packages/"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", scripts, and repo-root files use Strategy A or in-corpus stubs"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Lockfile, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "package.json"
        }), ", and Docusaurus feature flags stay aligned"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["That work shipped across ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md",
        children: "BR-090"
      }), " (dependency alignment) and a full corpus link remediation wave (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "v0.5.9.13+2"
      }), " through ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "+4"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further reading"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
          children: "Portal README — publish scope and BR-068"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/maintenance/docusaurus-corpus-triage-fr-067.md",
          children: "Docusaurus corpus triage (FR-067)"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/documentation/docusaurus-portal-index",
          children: "Docusaurus portal index"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you are standing up a similar monorepo portal, start with ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.strong, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "npm run build"
        }), " in strict mode early"]
      }), ". Fixing hundreds of links after the fact is slower than enforcing corpus hygiene from day one."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
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
9777(module) {
module.exports = JSON.parse('{"permalink":"/ai-dev-kit/blog/getting-docusaurus-working","editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/portal/blog/blog/2026-06-05-getting-docusaurus-working/index.md","source":"@site/blog/2026-06-05-getting-docusaurus-working/index.md","title":"Getting Docusaurus Working","description":"We spent several weeks getting the AI Dev Kit documentation portal to npm run build exit 0 under strict link checking, then shipped it to GitHub Pages. This post is a practical field guide — not a hello-world tutorial — for teams publishing a monorepo docs/ tree with Docusaurus 3.x.","date":"2026-06-05T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/ai-dev-kit/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":4.93,"hasTruncateMarker":true,"authors":[{"name":"AI Dev Kit maintainers","title":"Documentation portal team","url":"https://github.com/RMS-Ltd/ai-dev-kit","socials":{"github":"https://github.com/RMS-Ltd"},"imageURL":"https://github.com/RMS-Ltd.png","key":"adk","page":null}],"frontMatter":{"slug":"getting-docusaurus-working","title":"Getting Docusaurus Working","authors":["adk"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Significant release notes policy (RC ≥ 1)","permalink":"/ai-dev-kit/blog/RELEASE-NOTES-POLICY"},"nextItem":{"title":"Welcome","permalink":"/ai-dev-kit/blog/welcome"}}')

},

}]);