// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

import {createRequire} from 'module';

const require = createRequire(import.meta.url);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Dev Kit',
  tagline: 'Documentation portal for the AI Dev Kit monorepo',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages project site (FR-070 may change host/path for production deploy).
  url: 'https://earlution.github.io',
  baseUrl: '/ai-dev-kit/',

  organizationName: 'earlution',
  projectName: 'ai-dev-kit',

  // E5:S09:T08 / FR-067 FU-1: strict link checking (corpus must be clean).
  // E5:S09:T10 / FR-067 FU-3: strict in-page / cross-doc anchor checking.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Canonical KB: repository docs/ (FR-066).
          path: '../docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/earlution/ai-dev-kit/tree/main/docs/',
          exclude: [
            'changelog-and-release-notes/changelog-archive/**',
            'knowledge/changelog-and-release-notes/changelog-archive/**',
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/earlution/ai-dev-kit/tree/main/portal/blog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // FR-071: offline search index generated at build time (no Algolia / third-party queries).
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AI Dev Kit',
        logo: {
          alt: 'AI Dev Kit Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/earlution/ai-dev-kit',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation index',
                to: '/docs/documentation/docusaurus-portal-index',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'Repository',
                href: 'https://github.com/earlution/ai-dev-kit',
              },
              {
                label: 'Issues',
                href: 'https://github.com/earlution/ai-dev-kit/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Dev Kit contributors. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
