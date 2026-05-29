import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Workflows (RW, UKW, CMW)',
    description: (
      <>
        Release Workflow, Update Kanban, and Changelog Maintenance are documented in{' '}
        <strong>Documentation</strong> and <strong>Knowledge</strong>. Start from the{' '}
        <Link to="/docs/documentation/docusaurus-portal-index">documentation portal index</Link>.
      </>
    ),
  },
  {
    title: 'Versioning & Kanban',
    description: (
      <>
        Internal version schema and Kanban governance for this repo:{' '}
        <Link to="/docs/architecture/standards-and-adrs/dev-kit-versioning-policy">
          dev-kit versioning policy
        </Link>
        {' · '}
        <Link to="/docs/project-management/rituals/policy/kanban-governance-policy">
          Kanban governance policy
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Framework adoption',
    description: (
      <>
        Install and use shipped frameworks from this monorepo:{' '}
        <Link to="/docs/documentation/user-docs/framework-dependency-installation-guide">
          framework dependency installation guide
        </Link>
        .
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
