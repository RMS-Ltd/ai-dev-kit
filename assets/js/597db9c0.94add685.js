"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["66551"], {
8169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_06_s_09_t_19_br_088_version_file_scaffold_md_597_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-06-s-09-t-19-br-088-version-file-scaffold-md-597.json
var site_docs_implementation_cycles_ipp_e_06_s_09_t_19_br_088_version_file_scaffold_md_597_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold","title":"E06:S09:T19 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS09:T19)","source":"@site/../docs/implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E06:S09:T18 — Planning: BR-087 framework slug install closure (wave 2)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T18-br087-framework-slug-install-closure"},"next":{"title":"E06:S09:T20 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T20-install-setup-error-code-registry-fr108"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E06:S09 — Planning: Spec, Tests, Implementation Plan (IPW)';

const assets = {

};



const toc = [{
  "value": "1. Requirements (Ascertained Baseline)",
  "id": "1-requirements-ascertained-baseline",
  "level": 2
}, {
  "value": "2. Specification",
  "id": "2-specification",
  "level": 2
}, {
  "value": "2.5 ADR necessity",
  "id": "25-adr-necessity",
  "level": 3
}, {
  "value": "3. Test design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "5. Documentation deliverables",
  "id": "5-documentation-deliverables",
  "level": 2
}, {
  "value": "7. Success / verification",
  "id": "7-success--verification",
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
    input: "input",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e06s09--planning-spec-tests-implementation-plan-ipw",
        children: ["E06:S09", ":T19", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T19-rw-install-version-file-scaffold-br088",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T19-rw-install-version-file-scaffold-br088.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E06:S09", ":T19", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold",
        children: "BR-088"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/18",
        children: "GitHub #18"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.19+1"
      }), " — pending user verification)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements-ascertained-baseline",
      children: "1. Requirements (Ascertained Baseline)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["After RW install writes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), ", prompt when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version_file"
            }), " missing"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-088"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Scaffold: parent dirs + dev-kit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_*"
            }), " stub"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-088 AC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decline → PARTIAL + mandatory next steps (no SUCCESS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User + BR-088"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Print created path and initial ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1.1+1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-016"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " documents behaviour"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-088"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign-off contract verifiable for BR-088"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do not overwrite existing file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--dry-run"
            }), " does not write stub"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope:"
      }), " Full ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/"
      }), " layout; T16 / #17 patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Interactive prompt (default ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes"
      }), ") after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " write. Hook: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "install_release_workflow.py"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity",
      children: "2.5 ADR necessity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXEMPT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_render_version_stub_devkit_schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_ensure_scaffold_creates_parents_and_file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_ensure_scaffold_skips_when_exists"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_ensure_scaffold_decline_sets_missing_flag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_ensure_scaffold_dry_run_no_write"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["File: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_install_release_workflow_version_scaffold.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_install_release_workflow_version_scaffold.py"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T19 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TODO → IN PROGRESS"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "render_version_py_stub"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ensure_version_file_scaffold"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ScaffoldResult"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wire ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main()"
            }), "; force PARTIAL on decline"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "install_github_issue_signoff"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version_file_exists"
            }), " check"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSTALL doc + signoff YAML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pytest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E06:S09", ":T19", " --art"]
            }), "; reconcile status"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "github-issue-install-signoff-contract.yaml"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification",
      children: "7. Success / verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Accept prompt → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " on disk with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_*"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Decline → PARTIAL + next steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "pytest green"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "User closes #18 after replay"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold",
          children: "BR-088"
        })
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