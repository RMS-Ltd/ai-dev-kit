"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["74132"], {
5952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developer_tools_ide_whitelist_uat_log_md_8fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developer-tools-ide-whitelist-uat-log-md-8fb.json
var site_docs_developer_tools_ide_whitelist_uat_log_md_8fb_namespaceObject = JSON.parse('{"id":"developer-tools/ide-whitelist-uat-log","title":"IDE whitelist — UAT and integration evidence log","description":"TaskS07:T107","source":"@site/../docs/developer-tools/ide-whitelist-uat-log.md","sourceDirName":"developer-tools","slug":"/developer-tools/ide-whitelist-uat-log","permalink":"/ai-dev-kit/docs/developer-tools/ide-whitelist-uat-log","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/developer-tools/ide-whitelist-uat-log.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T23:45:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"IDE command whitelist guide","permalink":"/ai-dev-kit/docs/developer-tools/ide-whitelist-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/developer-tools/ide-whitelist-uat-log.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T23:45:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'IDE whitelist — UAT and integration evidence log';

const assets = {

};



const toc = [{
  "value": "Evidence schema",
  "id": "evidence-schema",
  "level": 2
}, {
  "value": "Research spike — Cursor integration (2026-05-30)",
  "id": "research-spike--cursor-integration-2026-05-30",
  "level": 2
}, {
  "value": "Evidence entries",
  "id": "evidence-entries",
  "level": 2
}, {
  "value": "Entry 001 — Automated catalog validation (2026-05-30)",
  "id": "entry-001--automated-catalog-validation-2026-05-30",
  "level": 3
}, {
  "value": "Entry 002 — Live prompt reduction (maintainer UAT — pending)",
  "id": "entry-002--live-prompt-reduction-maintainer-uat--pending",
  "level": 3
}, {
  "value": "Entry 003 — permissions.json catalog mapping (2026-06-01)",
  "id": "entry-003--permissionsjson-catalog-mapping-2026-06-01",
  "level": 3
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
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ide-whitelist--uat-and-integration-evidence-log",
        children: "IDE whitelist — UAT and integration evidence log"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization",
        children: ["E06:S07", ":T107"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement",
        children: "ADR-013"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Append-only:"
      }), " Add new entries at the top of ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#evidence-entries",
        children: "Evidence entries"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evidence-schema",
      children: "Evidence schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "date_utc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO-8601 UTC timestamp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scenario"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What was tested (e.g. RW mini-sequence, Cursor allowlist setup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "observed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What happened"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "prompts_before"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UAT only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approval prompt count before catalog applied in Cursor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "prompts_after"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UAT only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approval prompt count after maintainer configured allowlist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pass"
            }), " | ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fail"
            }), " | ", (0,jsx_runtime.jsx)(_components.code, {
              children: "blocked"
            }), " | ", (0,jsx_runtime.jsx)(_components.code, {
              children: "partial"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool version, follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-spike--cursor-integration-2026-05-30",
      children: "Research spike — Cursor integration (2026-05-30)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "date_utc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-30T23:45:00Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scenario"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Product integration spike — does Cursor load ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            }), "?"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo catalog consumed automatically or documented hook"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "observed"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No."
            }), " Cursor does not read this YAML. Command approval uses ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cursor Settings"
            }), " (Agents / Auto-Run / sandbox allowlist — exact labels vary by version). Maintainers map regex families from the catalog into UI rules manually."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pass"
            }), " (honest model documented in ADR-013 + guide)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional future: Cursor hooks if API stabilizes. Does ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " fix ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker",
              children: "BR-039"
            }), " (Windsurf/Cascade vendor)."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evidence-entries",
      children: "Evidence entries"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entry-001--automated-catalog-validation-2026-05-30",
      children: "Entry 001 — Automated catalog validation (2026-05-30)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "date_utc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-30T23:50:00Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scenario"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_whitelist_patterns.py"
            }), " + pytest on repo catalog"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expected"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Exit 0; all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "examples"
            }), " match; no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/Users/"
            }), " in YAML"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "observed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS; 4 pytest cases green"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pass"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py",
              children: "test_validate_whitelist_patterns.py"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entry-002--live-prompt-reduction-maintainer-uat--pending",
      children: "Entry 002 — Live prompt reduction (maintainer UAT — pending)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "date_utc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-06-01T17:30:00Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scenario"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Repo ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/permissions.json"
            }), " applied from catalog; Run Mode Allowlist required on maintainer machine"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer repeated approvals for validation/git command families vs concrete-string allowlist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "observed"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Repo configured:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "terminalAllowlist"
            }), " prefixes in ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/permissions.json",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: ".cursor/permissions.json"
              })
            }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pending:"
            }), " maintainer enables Allowlist run mode and records prompt counts on next RW mini-sequence"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "prompts_before"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "prompts_after"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deliberately omits blanket ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git"
            }), " prefix (avoids auto-allowing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git push --force"
            }), "). Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git push origin"
            }), " instead."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entry-003--permissionsjson-catalog-mapping-2026-06-01",
      children: "Entry 003 — permissions.json catalog mapping (2026-06-01)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "date_utc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-06-01T17:30:00Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scenario"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Map ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/whitelist-patterns.yaml",
              children: "whitelist-patterns.yaml"
            }), " families → ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/permissions.json",
              children: "permissions.json"
            }), " per Cursor docs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix entries cover validation scripts, framework scripts, git RW subset, gh, rg, find"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "observed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File committed in repo; Cursor hot-reloads on change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pass"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["See updated ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/developer-tools/ide-whitelist-guide",
              children: "ide-whitelist-guide.md"
            }), " § Cursor integration"]
          })]
        })]
      })]
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