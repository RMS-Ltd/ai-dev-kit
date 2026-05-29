import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Heading as="h2" className="margin-top--md text--light">
          Start here
        </Heading>
        <div className={clsx(styles.buttons, 'margin-top--md')}>
          <Link
            className="button button--secondary button--lg margin-horiz--sm"
            to="/docs/documentation/docusaurus-portal-index">
            Browse the documentation index
          </Link>
          <Link
            className="button button--outline button--secondary button--lg margin-horiz--sm"
            to="/docs/architecture/standards-and-adrs/dev-kit-versioning-policy">
            Versioning policy
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="AI Dev Kit monorepo documentation — architecture, workflows, Kanban, and framework packages.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
