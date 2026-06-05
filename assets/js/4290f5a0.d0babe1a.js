"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["66923"], {
60937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_journals_recovery_procedure_md_429_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-journals-recovery-procedure-md-429.json
var site_docs_journals_recovery_procedure_md_429_namespaceObject = JSON.parse('{"id":"journals/RECOVERY_PROCEDURE","title":"RW Recovery Procedure","description":"Applies to: Release Workflow (RW) runs that fail or abort mid-sequence.","source":"@site/../docs/journals/RECOVERY_PROCEDURE.md","sourceDirName":"journals","slug":"/journals/RECOVERY_PROCEDURE","permalink":"/ai-dev-kit/docs/journals/RECOVERY_PROCEDURE","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/journals/RECOVERY_PROCEDURE.md","tags":[],"version":"current","frontMatter":{}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/journals/RECOVERY_PROCEDURE.md


const frontMatter = {};
const contentTitle = 'RW Recovery Procedure';

const assets = {

};



const toc = [{
  "value": "1. Immediate Actions",
  "id": "1-immediate-actions",
  "level": 2
}, {
  "value": "2. Assess Touched Artifacts",
  "id": "2-assess-touched-artifacts",
  "level": 2
}, {
  "value": "2.1 Automatic Revertible",
  "id": "21-automatic-revertible",
  "level": 3
}, {
  "value": "2.2 Manual Reconciliation Required",
  "id": "22-manual-reconciliation-required",
  "level": 3
}, {
  "value": "3. Fix the Root Cause",
  "id": "3-fix-the-root-cause",
  "level": 2
}, {
  "value": "4. Deterministic Rerun",
  "id": "4-deterministic-rerun",
  "level": 2
}, {
  "value": "4.1 If the failure occurred before Step 10 (Commit)",
  "id": "41-if-the-failure-occurred-before-step-10-commit",
  "level": 3
}, {
  "value": "4.2 If the failure occurred at Step 10+ (Commit, Tag, Push)",
  "id": "42-if-the-failure-occurred-at-step-10-commit-tag-push",
  "level": 3
}, {
  "value": "4.3 Tag collision / wrong BUILD (BR-097)",
  "id": "43-tag-collision--wrong-build-br-097",
  "level": 3
}, {
  "value": "5. Verify Clean Recovery",
  "id": "5-verify-clean-recovery",
  "level": 2
}, {
  "value": "6. Forensic Retention",
  "id": "6-forensic-retention",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "rw-recovery-procedure",
        children: "RW Recovery Procedure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Applies to:"
      }), " Release Workflow (RW) runs that fail or abort mid-sequence.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisite:"
      }), " A recovery report has been emitted to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/journals/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-immediate-actions",
      children: "1. Immediate Actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Locate the recovery report."
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python -m \"packages/frameworks/workflow-mgt/scripts/journal\" list\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Identify the most recent failed run."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Read the Markdown recovery report."
          }), "\nOpen ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/journals/rw-{run_id}-{timestamp}-recovery.md"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Identify the failed step."
          }), "\nThe report names the exact step and its exit code."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-assess-touched-artifacts",
      children: "2. Assess Touched Artifacts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The recovery report splits touched files into two categories:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-automatic-revertible",
      children: "2.1 Automatic Revertible"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These are typically uncommitted working-tree changes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Unstage if staged: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git reset HEAD <file>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Revert if modified: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git checkout -- <file>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Delete if untracked: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rm <file>"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety rule:"
        }), " Never revert files that have already been committed and pushed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-manual-reconciliation-required",
      children: "2.2 Manual Reconciliation Required"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These require operator review before retry:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Committed version bumps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog / README edits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created git tags (even if not yet pushed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pushed commits or tags"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each item:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inspect the change (", (0,jsx_runtime.jsx)(_components.code, {
          children: "git show"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git diff"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decide whether to keep, amend, or revert with a follow-up commit."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a tag was created but not pushed, delete it locally: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -d <tag>"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-fix-the-root-cause",
      children: "3. Fix the Root Cause"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before retrying:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address the failure reason (fix script, update config, resolve merge conflict, etc.)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify the fix in isolation if possible."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-deterministic-rerun",
      children: "4. Deterministic Rerun"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Re-invoke the Release Workflow with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same task token"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "RW E6:S06:T63\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why the same token?"
        }), " The RW uses the task ID to determine version bump semantics and kanban reconciliation scope. Using a different token would create an unintended release anchor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-if-the-failure-occurred-before-step-10-commit",
      children: "4.1 If the failure occurred before Step 10 (Commit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usually a clean working tree is sufficient after reverting auto-revertible files."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-if-the-failure-occurred-at-step-10-commit-tag-push",
      children: "4.2 If the failure occurred at Step 10+ (Commit, Tag, Push)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inspect git history first:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git log --oneline -10\ngit tag -l\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the commit exists locally but was not pushed: amend or reset as needed."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the commit was pushed: do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " force-push. Create a revert commit or a follow-up fix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a tag was pushed to remote: do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " delete the remote tag. Create a new release with a corrected tag."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-tag-collision--wrong-build-br-097",
      children: "4.3 Tag collision / wrong BUILD (BR-097)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If Step 9/11 reports a tagged BUILD collision, SemVer tag already exists, or push rejects an existing tag:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not"
        }), " run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -f"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push -f"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push origin +v*"
        }), " on release tags."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Confirm ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " was not left at a reused BUILD (run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resolve_rw_build.py"
        }), " if unsure)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bump ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HEAD_BUILD + 1"
        }), " for the same E:S", ":T", "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Re-invoke: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E\\{epic\\}:S\\{story\\}:T\\{task\\} --art"
        }), " (normal release — not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--doc-policy-zero"
        }), " unless user explicitly required BUILD +0 on untagged doc-init)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Historical mis-pointed tags remain forensic evidence; correction is forward-only via new BUILD."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-verify-clean-recovery",
      children: "5. Verify Clean Recovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After the rerun succeeds:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Confirm ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/"
        }), " contains a new ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "success"
        }), " journal."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the new recovery report (it should be absent or state \"no failed steps\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm the kanban board and task doc reflect the completed release."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-forensic-retention",
      children: "6. Forensic Retention"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Failed run journals are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not automatically deleted"
      }), ". They remain in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/journals/"
      }), " for post-mortem analysis. If you need to clean up:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Archive old journals (optional)\nmkdir -p docs/journals/archive\nmv docs/journals/rw-*-2026-01-* docs/journals/archive/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ROLLBACK_CONTRACT.md"
        }), " — detailed automatic vs manual rollback surfaces."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "JOURNAL_SCHEMA.md"
        }), " — JSON schema reference for programmatic consumers."]
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