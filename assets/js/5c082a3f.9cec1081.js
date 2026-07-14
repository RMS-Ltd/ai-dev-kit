"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["5228"], {
7290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_adopter_external_resource_dependency_tracking_md_5c0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-adopter-external-resource-dependency-tracking-md-5c0.json
var site_docs_documentation_user_docs_adopter_external_resource_dependency_tracking_md_5c0_namespaceObject = JSON.parse('{"id":"documentation/user-docs/adopter-external-resource-dependency-tracking","title":"Adopter External Resource Dependency Tracking","description":"Purpose: Explain how your project tracks upstream documentation and style resources after copying material from ai-dev-kit—without expecting ai-dev-kit to poll upstream repos on your behalf.","source":"@site/../docs/documentation/user-docs/adopter-external-resource-dependency-tracking.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/adopter-external-resource-dependency-tracking","permalink":"/ai-dev-kit/docs/documentation/user-docs/adopter-external-resource-dependency-tracking","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/adopter-external-resource-dependency-tracking.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-04T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Existing Project Rollout Checklist","permalink":"/ai-dev-kit/docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST"},"next":{"title":"Apple Platform Setup Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/apple-platform-setup-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/adopter-external-resource-dependency-tracking.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-04T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Adopter External Resource Dependency Tracking';

const assets = {

};



const toc = [{
  "value": "Scope (greenfield vs brownfield)",
  "id": "scope-greenfield-vs-brownfield",
  "level": 2
}, {
  "value": "Two kinds of “dependencies” (do not mix them)",
  "id": "two-kinds-of-dependencies-do-not-mix-them",
  "level": 2
}, {
  "value": "Standard trio (when you use README template patterns)",
  "id": "standard-trio-when-you-use-readme-template-patterns",
  "level": 2
}, {
  "value": "Who tracks what",
  "id": "who-tracks-what",
  "level": 2
}, {
  "value": "Recommended practice",
  "id": "recommended-practice",
  "level": 2
}, {
  "value": "When you adopt the README template (FR-002 / T13)",
  "id": "when-you-adopt-the-readme-template-fr-002--t13",
  "level": 2
}, {
  "value": "Copy-paste templates (host repo)",
  "id": "copy-paste-templates-host-repo",
  "level": 2
}, {
  "value": "Related documentation",
  "id": "related-documentation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "adopter-external-resource-dependency-tracking",
        children: "Adopter External Resource Dependency Tracking"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Explain how ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your project"
      }), " tracks upstream documentation and style resources after copying material from ai-dev-kit—without expecting ai-dev-kit to poll upstream repos on your behalf."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing work:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/kanban/epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md",
        children: ["E01:S02", ":T14"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/kanban/fbu/FR-003-dependency-tracking-in-adopting-projects.md",
        children: "FR-003"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-greenfield-vs-brownfield",
      children: "Scope (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Guidance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Greenfield"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After install or template setup, add a register when you copy README/changelog/badge patterns from ai-dev-kit examples."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Brownfield"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only track resources you ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "actually use"
            }), ". Existing README/changelog may already follow another convention—do not duplicate tracking for unused templates."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Policy: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
        children: "ADR-003"
      }), ". Install hub: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
        children: "INSTALL_IN_YOUR_PROJECT.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "two-kinds-of-dependencies-do-not-mix-them",
      children: "Two kinds of “dependencies” (do not mix them)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Kind"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it is"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where to read"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Framework packages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit workflow/kanban/versioning copies or CLI-managed packages"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "framework-dependency-installation-guide.md"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "framework-dependency-update-guide.md"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "External doc/style resources"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Third-party templates and conventions you copied into ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "your"
            }), " README, changelog, or badges"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "This guide"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ai-dev-kit follows ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copy, don't reference"
      }), " for frameworks (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/numbering-versioning/README.md",
        children: "numbering-versioning README"
      }), "). The same principle applies here: once you copy a README structure or changelog format, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your repo"
      }), " owns staying aware of upstream changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "standard-trio-when-you-use-readme-template-patterns",
      children: "Standard trio (when you use README template patterns)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your project adopted README or presentation patterns influenced by ai-dev-kit guidance (see ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/kanban/fbu/FR-002-update-been-there-readme.md",
        children: ["FR-002 / E01:S02", ":T13"]
      }), " when the template ships), you typically acknowledge:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Resource"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "URL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What you copied"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best-README-Template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/othneildrew/Best-README-Template",
              children: "https://github.com/othneildrew/Best-README-Template"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README section structure and layout patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keep a Changelog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://keepachangelog.com/",
              children: "https://keepachangelog.com/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            }), " format and heading conventions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shields.io"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://shields.io/",
              children: "https://shields.io/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Badge URLs and badge sections in README"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You may add rows for other resources (license badges, other style guides). The register is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your"
      }), " source of truth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "who-tracks-what",
      children: "Who tracks what"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Party"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responsibility"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ai-dev-kit"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ship adoption guides, optional copy-paste templates under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/user-docs/examples/"
            }), ", and (separately) framework packages. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Does not"
            }), " monitor Best-README / Keep a Changelog / Shields on your behalf."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Your project"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain an upstream register, review cadence, and decide when to merge upstream ideas into your README/changelog/badges."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This avoids a middleman: ai-dev-kit → adopter → upstream. You connect ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "directly"
      }), " to the resources you use."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-practice",
      children: "Recommended practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create a register"
        }), " — Copy ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/examples/adopter-upstream-register",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "examples/adopter-upstream-register.md"
          })
        }), " to your repo root as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DEPENDENCIES.md"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/upstream-register.md"
        }), "). Fill one row per resource."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acknowledge in README"
        }), " — Keep an Acknowledgments section listing the trio (and ai-dev-kit if you use its frameworks)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review cadence"
        }), " — At least quarterly, or whenever you overhaul README/changelog/badges. Record ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last reviewed"
        }), " in the register."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional automation"
        }), " — Copy ", (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(2582)/* ["default"] */.A) + "",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "examples/adopter-upstream-check.yml"
          })
        }), " and/or ", (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(8833)/* ["default"] */.A) + "",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "examples/adopter-upstream-check.sh"
          })
        }), " into ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "your"
        }), " repo and customize URLs. These are reminders and link checks only—not auto-merges."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-you-adopt-the-readme-template-fr-002--t13",
      children: "When you adopt the README template (FR-002 / T13)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/kanban/epics/epic-01/story-02-package-and-repo-architecture/T13-readme-template-best-readme-fr002.md",
        children: ["E01:S02", ":T13"]
      }), " delivers a project README template:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy the template into your repo and customize placeholders."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize or update your upstream register with the trio rows above."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " wait for an ai-dev-kit release to pick up Best-README or Keep a Changelog changes—check upstream when ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "you"
        }), " choose."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "copy-paste-templates-host-repo",
      children: "Copy-paste templates (host repo)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All files under ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/examples/adopter-upstream-register",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "examples/"
        })
      }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "examples to copy"
      }), ", not scripts ai-dev-kit runs in this repository."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use in your project"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adopter-upstream-register.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Table template for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DEPENDENCIES.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adopter-upstream-check.yml"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/upstream-doc-reminder.yml"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adopter-upstream-check.sh"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/check-upstream-docs.sh"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/repo-structure-for-adopters",
          children: "Repository structure for adopters"
        }), " — optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DEPENDENCIES.md"
        }), " at project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide",
          children: "Post-template setup guide"
        }), " — README customization step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/implementation-cycles/IPP-E01S02T14-adopter-external-dependency-tracking.md",
          children: "IPP-E1S2T14"
        }), " — implementation plan"]
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
8833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/adopter-upstream-check-bd713fb82346e2f7d3e32c5f160fa5ad.sh");

},
2582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/adopter-upstream-check-ac451c415d92557a91295b865ad78826.yml");

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