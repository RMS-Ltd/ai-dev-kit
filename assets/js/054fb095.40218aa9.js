"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["80077"], {
31613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_readme_md_054_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-readme-md-054.json
var site_docs_knowledge_readme_md_054_namespaceObject = JSON.parse('{"id":"knowledge/README","title":"Use Cases Knowledge Base","description":"Purpose: Central repository for all use cases, organized by type (Canonical vs Discovered) and domain.","source":"@site/../docs/knowledge/README.md","sourceDirName":"knowledge","slug":"/knowledge/","permalink":"/ai-dev-kit/docs/knowledge/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T14:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"KB Index","permalink":"/ai-dev-kit/docs/knowledge/KB-INDEX"},"next":{"title":"Use Case Methodology: Canonical vs Discovered Use Cases","permalink":"/ai-dev-kit/docs/knowledge/USE_CASE_METHODOLOGY"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T14:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Use Cases Knowledge Base';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Quick Navigation",
  "id": "quick-navigation",
  "level": 2
}, {
  "value": "Knowledge Base Categories",
  "id": "knowledge-base-categories",
  "level": 2
}, {
  "value": "Articles",
  "id": "articles",
  "level": 3
}, {
  "value": "Use Case Types",
  "id": "use-case-types",
  "level": 3
}, {
  "value": "Canonical Use Cases",
  "id": "canonical-use-cases",
  "level": 3
}, {
  "value": "Discovered Use Cases",
  "id": "discovered-use-cases",
  "level": 3
}, {
  "value": "Use Case Indexes",
  "id": "use-case-indexes",
  "level": 2
}, {
  "value": "Canonical Use Cases Index",
  "id": "canonical-use-cases-index",
  "level": 3
}, {
  "value": "Discovered Use Cases Index",
  "id": "discovered-use-cases-index",
  "level": 3
}, {
  "value": "How to Use This Section",
  "id": "how-to-use-this-section",
  "level": 2
}, {
  "value": "Finding Use Cases",
  "id": "finding-use-cases",
  "level": 3
}, {
  "value": "Creating Use Cases",
  "id": "creating-use-cases",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "use-cases-knowledge-base",
        children: "Use Cases Knowledge Base"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Central repository for all use cases, organized by type (Canonical vs Discovered) and domain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Project maintainers, designers, developers, framework users"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section contains all use cases for the ai-dev-kit framework and related patterns. Use cases are organized into two categories:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical Use Cases:"
        }), " Planned, designed use cases from the design phase"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovered Use Cases:"
        }), " Patterns and practices discovered during actual work"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-navigation",
      children: "Quick Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/USE_CASE_METHODOLOGY",
            children: "Methodology"
          })
        }), " - How to organize and manage use cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/use-cases/canonical/",
            children: "Canonical Use Cases"
          })
        }), " - Design-phase use cases (architecture KB)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/use-cases/discovered/",
            children: "Discovered Use Cases"
          })
        }), " - Implementation-phase use cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/use-cases/templates/DISCOVERED_USE_CASE_TEMPLATE",
            children: "Templates"
          })
        }), " - Discovered use case template (see also architecture canonical template)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/articles/",
            children: "Articles"
          })
        }), " - Blog posts and in-depth articles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/analysis/meta-analysis-executive-summary",
            children: "Analysis"
          })
        }), " - Analysis documents and reports (entry index)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/guides/",
            children: "Guides"
          })
        }), " - How-to guides and tutorials"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/reviews/pir/",
            children: "Reviews"
          })
        }), " - Post-implementation reviews (PIRs)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledge-base-categories",
      children: "Knowledge Base Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "articles",
      children: "Articles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/knowledge/articles/",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "articles/README.md"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " In-depth blog posts, articles, and comprehensive write-ups on framework topics, patterns, and lessons learned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid task template system: Building better templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework adoption stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical deep-dives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lessons learned and best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recent Articles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/knowledge/articles/hybrid-task-template-system-building-better-templates",
          children: "Building Better Templates: How We Solved the 300-Template Problem with a Hybrid Approach"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-types",
      children: "Use Case Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-use-cases",
      children: "Canonical Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/use-cases/canonical/",
        children: "Architecture canonical use cases"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Use cases identified and documented during the design/planning phase, before implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planned and intentional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Part of original design/architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documented before implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stable and well-defined"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework adoption patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow execution patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban organization patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discovered-use-cases",
      children: "Discovered Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/knowledge/use-cases/discovered/",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "use-cases/discovered/README.md"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Use cases, patterns, or practices discovered during actual work, implementation, or problem-solving."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Emergent from real work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discovered during implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May reveal gaps in original design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can inform future canonical design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-opening BRs/tasks pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional wiring principle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern discovery workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-indexes",
      children: "Use Case Indexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-use-cases-index",
      children: "Canonical Use Cases Index"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/use-cases/canonical/",
        children: "canonical use cases index"
      }), " for complete index of canonical use cases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discovered-use-cases-index",
      children: "Discovered Use Cases Index"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/knowledge/use-cases/discovered/",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "use-cases/discovered/README.md"
        })
      }), " for complete index of discovered use cases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-this-section",
      children: "How to Use This Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-use-cases",
      children: "Finding Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "By Type:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Articles: Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "articles/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Canonical Use Cases: Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use-cases/canonical/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Discovered Use Cases: Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use-cases/discovered/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Analysis: Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "analysis/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Guides: Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "guides/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Reviews: Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "reviews/"
            }), " directory"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "By Domain:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check indexes in each directory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use domain tags in use case documents"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "By Status:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Active: Check active use cases in indexes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deprecated: Check deprecated use cases"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Promoted: Check promoted discovered use cases"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-use-cases",
      children: "Creating Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Article:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "articles/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Follow naming convention: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[topic]-[descriptive-title].md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include lifecycle metadata (evergreen recommended)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link from relevant documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Canonical Use Case:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use-cases/templates/CANONICAL_USE_CASE_TEMPLATE.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use-cases/canonical/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Follow naming convention: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UC-XXX-[title].md"
            }), " (UC implies canonical)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use-cases/canonical/README.md"
            }), " index"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Discovered Use Case:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use-cases/templates/DISCOVERED_USE_CASE_TEMPLATE.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use-cases/discovered/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Follow naming convention: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UC-D-XXX-[title].md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wire to related BR/FR, Tasks, documentation"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use-cases/discovered/README.md"
            }), " index"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/knowledge/USE_CASE_METHODOLOGY",
          children: "USE_CASE_METHODOLOGY.md"
        }), " - Complete methodology guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE",
          children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
        }), " - Example discovered use case"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE",
          children: "REOPENING_BR_AND_TASKS_GUIDE.md"
        }), " - Example discovered use case"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This section is part of the Knowledge Base. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/README.md"
        }), " for complete KB structure."]
      })
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