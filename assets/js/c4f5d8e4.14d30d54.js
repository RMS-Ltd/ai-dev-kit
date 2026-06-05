"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["34823"], {
54791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(95310);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(10898);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 80 modules
var Layout = __webpack_require__(60816);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(72072);
;// CONCATENATED MODULE: ./src/components/HomepageFeatures/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"features":"features_t9lD","featureSvg":"featureSvg_GfXr"});
;// CONCATENATED MODULE: ./src/components/HomepageFeatures/index.js





const FeatureList = [
    {
        title: 'Workflows (RW, UKW, CMW)',
        description: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                "Release Workflow, Update Kanban, and Changelog Maintenance are documented in",
                ' ',
                /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                    children: "Documentation"
                }),
                " and ",
                /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                    children: "Knowledge"
                }),
                ". Start from the",
                ' ',
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                    to: "/docs/documentation/docusaurus-portal-index",
                    children: "documentation portal index"
                }),
                "."
            ]
        })
    },
    {
        title: 'Versioning & Kanban',
        description: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                "Internal version schema and Kanban governance for this repo:",
                ' ',
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                    to: "/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
                    children: "dev-kit versioning policy"
                }),
                ' · ',
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                    to: "/docs/project-management/rituals/policy/kanban-governance-policy",
                    children: "Kanban governance policy"
                }),
                "."
            ]
        })
    },
    {
        title: 'Framework adoption',
        description: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                "Install and use shipped frameworks from this monorepo:",
                ' ',
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                    to: "/docs/documentation/user-docs/framework-dependency-installation-guide",
                    children: "framework dependency installation guide"
                }),
                "."
            ]
        })
    }
];
function Feature({ title, description }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)('col col--4'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "text--center padding-horiz--md",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* ["default"] */.A, {
                    as: "h3",
                    children: title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    children: description
                })
            ]
        })
    });
}
function HomepageFeatures() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: styles_module.features,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "row",
                children: FeatureList.map((props, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Feature, {
                        ...props
                    }, idx))
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/index.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const index_module = ({"heroBanner":"heroBanner_qdFl","buttons":"buttons_AeoN"});
;// CONCATENATED MODULE: ./src/pages/index.js








function HomepageHeader() {
    const { siteConfig } = (0,useDocusaurusContext/* ["default"] */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
        className: (0,clsx/* ["default"] */.A)('hero hero--primary', index_module.heroBanner),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* ["default"] */.A, {
                    as: "h1",
                    className: "hero__title",
                    children: siteConfig.title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "hero__subtitle",
                    children: siteConfig.tagline
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* ["default"] */.A, {
                    as: "h2",
                    className: "margin-top--md text--light",
                    children: "Start here"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (0,clsx/* ["default"] */.A)(index_module.buttons, 'margin-top--md'),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                            className: "button button--secondary button--lg margin-horiz--sm",
                            to: "/docs/documentation/docusaurus-portal-index",
                            children: "Browse the documentation index"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
                            className: "button button--outline button--secondary button--lg margin-horiz--sm",
                            to: "/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
                            children: "Versioning policy"
                        })
                    ]
                })
            ]
        })
    });
}
function Home() {
    const { siteConfig } = (0,useDocusaurusContext/* ["default"] */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* ["default"] */.A, {
        title: siteConfig.title,
        description: "AI Dev Kit monorepo documentation — architecture, workflows, Kanban, and framework packages.",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(HomepageHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HomepageFeatures, {})
            })
        ]
    });
}


},

}]);