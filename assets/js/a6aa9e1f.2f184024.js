"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7496"], {
2152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogListPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(898);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(4308);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(8287);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 6 modules
var BlogLayout = __webpack_require__(8579);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogListPaginator/index.js
var BlogListPaginator = __webpack_require__(4553);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(4175);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItems/index.js
var BlogPostItems = __webpack_require__(284);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(3572);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(7645);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogListPage/StructuredData/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function BlogListPageStructuredData(props) {
    const structuredData = (0,client/* .useBlogListPageStructuredData */.kJ)(props);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("script", {
            type: "application/ld+json",
            children: JSON.stringify(structuredData)
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogListPage/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








function BlogListPageMetadata(props) {
    const { metadata } = props;
    const { siteConfig: { title: siteTitle } } = (0,useDocusaurusContext/* ["default"] */.A)();
    const { blogDescription, blogTitle, permalink } = metadata;
    const isBlogOnlyMode = permalink === '/';
    const title = isBlogOnlyMode ? siteTitle : blogTitle;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* .PageMetadata */.be, {
                title: title,
                description: blogDescription
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* ["default"] */.A, {
                tag: "blog_posts_list"
            })
        ]
    });
}
function BlogListPageContent(props) {
    const { metadata, items, sidebar } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BlogLayout/* ["default"] */.A, {
        sidebar: sidebar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItems/* ["default"] */.A, {
                items: items
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogListPaginator/* ["default"] */.A, {
                metadata: metadata
            })
        ]
    });
}
function BlogListPage(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* .HtmlClassNameProvider */.e3, {
        className: (0,clsx/* ["default"] */.A)(ThemeClassNames/* .ThemeClassNames.wrapper.blogPages */.G.wrapper.blogPages, ThemeClassNames/* .ThemeClassNames.page.blogListPage */.G.page.blogListPage),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogListPageMetadata, {
                ...props
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogListPageStructuredData, {
                ...props
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogListPageContent, {
                ...props
            })
        ]
    });
}


},
4553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogListPaginator)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(568);
/* import */ var _theme_PaginatorNavLink__rspack_import_3 = __webpack_require__(7174);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function BlogListPaginator(props) {
    const { metadata } = props;
    const { previousPage, nextPage } = metadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
        className: "pagination-nav",
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.blog.paginator.navAriaLabel',
            message: 'Blog list page navigation',
            description: 'The ARIA label for the blog pagination'
        }),
        children: [
            previousPage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                permalink: previousPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.paginator.newerEntries",
                    description: "The label used to navigate to the newer blog posts page (previous page)",
                    children: "Newer entries"
                })
            }),
            nextPage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                permalink: nextPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.paginator.olderEntries",
                    description: "The label used to navigate to the older blog posts page (next page)",
                    children: "Older entries"
                }),
                isNext: true
            })
        ]
    });
}


},
4533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(7645);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Container/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function BlogPostItemContainer({ children, className }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
        className: className,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(5310);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"title":"title_f1Hy"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function BlogPostItemHeaderTitle({ className }) {
    const { metadata, isBlogPostPage } = (0,client/* .useBlogPost */.e7)();
    const { permalink, title } = metadata;
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TitleHeading, {
        className: (0,clsx/* ["default"] */.A)(styles_module.title, className),
        children: isBlogPostPage ? title : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
            to: permalink,
            children: title
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(568);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(8878);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__(7954);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Info_styles_module = ({"container":"container_mt6G"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
    const { selectMessage } = (0,usePluralForm/* .usePluralForm */.W)();
    return (readingTimeFloat)=>{
        const readingTime = Math.ceil(readingTimeFloat);
        return selectMessage(readingTime, (0,Translate/* .translate */.T)({
            id: 'theme.blog.post.readingTime.plurals',
            description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One min read|{readingTime} min read'
        }, {
            readingTime
        }));
    };
}
function ReadingTime({ readingTime }) {
    const readingTimePlural = useReadingTimePlural();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: readingTimePlural(readingTime)
    });
}
function DateTime({ date, formattedDate }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("time", {
        dateTime: date,
        children: formattedDate
    });
}
function Spacer() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: ' · '
    });
}
function BlogPostItemHeaderInfo({ className }) {
    const { metadata } = (0,client/* .useBlogPost */.e7)();
    const { date, readingTime } = metadata;
    const dateTimeFormat = (0,IntlUtils/* .useDateTimeFormat */.i)({
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formatDate = (blogDate)=>dateTimeFormat.format(new Date(blogDate));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* ["default"] */.A)(Info_styles_module.container, 'margin-vert--md', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTime, {
                date: date,
                formattedDate: formatDate(date)
            }),
            typeof readingTime !== 'undefined' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Spacer, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadingTime, {
                        readingTime: readingTime
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 22 modules
var Author = __webpack_require__(6947);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Authors_styles_module = ({"authorCol":"authorCol_Hf19","imageOnlyAuthorRow":"imageOnlyAuthorRow_pa_O","imageOnlyAuthorCol":"imageOnlyAuthorCol_G86a"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// Component responsible for the authors layout
function BlogPostItemHeaderAuthors({ className }) {
    const { metadata: { authors }, assets } = (0,client/* .useBlogPost */.e7)();
    const authorsCount = authors.length;
    if (authorsCount === 0) {
        return null;
    }
    const imageOnly = authors.every(({ name })=>!name);
    const singleAuthor = authors.length === 1;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)('margin-top--md margin-bottom--sm', imageOnly ? Authors_styles_module.imageOnlyAuthorRow : 'row', className),
        children: authors.map((author, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (0,clsx/* ["default"] */.A)(!imageOnly && (singleAuthor ? 'col col--12' : 'col col--6'), imageOnly ? Authors_styles_module.imageOnlyAuthorCol : Authors_styles_module.authorCol),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Author/* ["default"] */.A, {
                    author: {
                        ...author,
                        // Handle author images using relative paths
                        imageURL: assets.authorsImageUrls[idx] ?? author.imageURL
                    }
                })
            }, idx))
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function BlogPostItemHeader() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeaderTitle, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeaderInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeaderAuthors, {})
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(5248);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 45 modules
var MDXContent = __webpack_require__(948);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Content/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function BlogPostItemContent({ children, className }) {
    const { isBlogPostPage } = (0,client/* .useBlogPost */.e7)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        // This ID is used for the feed generation to locate the main content
        id: isBlogPostPage ? lib.blogPostContainerID : undefined,
        className: (0,clsx/* ["default"] */.A)('markdown', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* ["default"] */.A, {
            children: children
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(8287);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 5 modules
var EditMetaRow = __webpack_require__(7410);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__(4999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/ReadMoreLink/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function ReadMoreLabel() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
            id: "theme.blog.post.readMore",
            description: "The label used in blog post item excerpts to link to full blog posts",
            children: "Read more"
        })
    });
}
function BlogPostItemFooterReadMoreLink(props) {
    const { blogPostTitle, ...linkProps } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
        "aria-label": (0,Translate/* .translate */.T)({
            message: 'Read more about {title}',
            id: 'theme.blog.post.readMoreLabel',
            description: 'The ARIA label for the link to full blog posts from excerpts'
        }, {
            title: blogPostTitle
        }),
        ...linkProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadMoreLabel, {})
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function BlogPostItemFooter() {
    const { metadata, isBlogPostPage } = (0,client/* .useBlogPost */.e7)();
    const { tags, title, editUrl, hasTruncateMarker, lastUpdatedBy, lastUpdatedAt } = metadata;
    // A post is truncated if it's in the "list view" and it has a truncate marker
    const truncatedPost = !isBlogPostPage && hasTruncateMarker;
    const tagsExists = tags.length > 0;
    const renderFooter = tagsExists || truncatedPost || editUrl;
    if (!renderFooter) {
        return null;
    }
    // BlogPost footer - details view
    if (isBlogPostPage) {
        const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
            className: "docusaurus-mt-lg",
            children: [
                tagsExists && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (0,clsx/* ["default"] */.A)('row', 'margin-top--sm', ThemeClassNames/* .ThemeClassNames.blog.blogFooterEditMetaRow */.G.blog.blogFooterEditMetaRow),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListInline/* ["default"] */.A, {
                            tags: tags
                        })
                    })
                }),
                canDisplayEditMetaRow && /*#__PURE__*/ (0,jsx_runtime.jsx)(EditMetaRow/* ["default"] */.A, {
                    className: (0,clsx/* ["default"] */.A)('margin-top--sm', ThemeClassNames/* .ThemeClassNames.blog.blogFooterEditMetaRow */.G.blog.blogFooterEditMetaRow),
                    editUrl: editUrl,
                    lastUpdatedAt: lastUpdatedAt,
                    lastUpdatedBy: lastUpdatedBy
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
            className: "row docusaurus-mt-lg",
            children: [
                tagsExists && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (0,clsx/* ["default"] */.A)('col', {
                        'col--9': truncatedPost
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListInline/* ["default"] */.A, {
                        tags: tags
                    })
                }),
                truncatedPost && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (0,clsx/* ["default"] */.A)('col text--right', {
                        'col--3': tagsExists
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemFooterReadMoreLink, {
                        blogPostTitle: title,
                        to: metadata.permalink
                    })
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// apply a bottom margin in list view
function useContainerClassName() {
    const { isBlogPostPage } = (0,client/* .useBlogPost */.e7)();
    return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}
function BlogPostItem({ children, className }) {
    const containerClassName = useContainerClassName();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BlogPostItemContainer, {
        className: (0,clsx/* ["default"] */.A)(containerClassName, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemContent, {
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemFooter, {})
        ]
    });
}


},
284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItems)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(7645);
/* import */ var _theme_BlogPostItem__rspack_import_3 = __webpack_require__(4533);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function BlogPostItems({ items, component: BlogPostItemComponent = _theme_BlogPostItem__rspack_import_3/* ["default"] */.A }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: items.map(({ content: BlogPostContent })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_blog_client__rspack_import_2/* .BlogPostProvider */["in"], {
                content: BlogPostContent,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogPostItemComponent, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogPostContent, {})
                })
            }, BlogPostContent.metadata.permalink))
    });
}


},
7174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (PaginatorNavLink)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(4164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(5310);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
        to: permalink,
        children: [
            subLabel && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pagination-nav__sublabel",
                children: subLabel
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pagination-nav__label",
                children: title
            })
        ]
    });
}


},
535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(5310);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function Tag({ permalink, label, count, description }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* ["default"] */.A, {
        rel: "tag",
        href: permalink,
        title: description,
        className: (0,clsx/* ["default"] */.A)(styles_module.tag, count ? styles_module.tagWithCount : styles_module.tagRegular),
        children: [
            label,
            count && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: count
            })
        ]
    });
}


},
4999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(568);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(535);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TagsListInline({ tags }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
                    id: "theme.tags.tagsListLabel",
                    description: "The label alongside a tag list",
                    children: "Tags:"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: (0,clsx/* ["default"] */.A)(styles_module.tags, 'padding--none', 'margin-left--sm'),
                children: tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* ["default"] */.A, {
                            ...tag
                        })
                    }, tag.permalink))
            })
        ]
    });
}


},

}]);