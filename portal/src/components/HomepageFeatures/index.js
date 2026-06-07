import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const GITHUB_MAIN = 'https://github.com/RMS-Ltd/ai-dev-kit/blob/main/';

const FeatureList = [
  {
    title: 'Workflows (RW, UKW, IPW)',
    description: (
      <>
        Release, Kanban sync, and implementation planning cheatsheets live under{' '}
        <strong>Guides</strong>. Start from the{' '}
        <Link to="/docs/guides/workflow-initiation-cheatsheet">workflow initiation cheatsheet</Link>
        {' '}or the{' '}
        <Link to="/docs/documentation/docusaurus-portal-index">documentation portal index</Link>.
      </>
    ),
  },
  {
    title: 'Versioning & governance',
    description: (
      <>
        Internal standards (versioning, Kanban policy, ADRs) are maintained in the Git repository —{' '}
        <a href={`${GITHUB_MAIN}docs/governance/standards/dev-kit-versioning-policy.md`}>
          versioning policy
        </a>
        {' · '}
        <a href={`${GITHUB_MAIN}packages/frameworks/kanban/policies/kanban-governance-policy.md`}>
          Kanban governance policy
        </a>
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
