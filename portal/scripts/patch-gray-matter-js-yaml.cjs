#!/usr/bin/env node
'use strict';

/**
 * gray-matter@4.0.3 pins js-yaml ^3 and calls safeLoad/safeDump (removed in js-yaml 4).
 * With npm overrides forcing js-yaml@4.2.0, patch engines to use load/dump instead.
 *
 * Canonical implementation (Wave 8b + Wave 10): FAILSAFE_SCHEMA, replaceAll, write guard.
 * Do not merge further ai-findings-autofix PRs for this file — see E02:S16:T06 Wave 10.
 */
const fs = require('fs');
const path = require('path');

const enginesPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'gray-matter',
  'lib',
  'engines.js',
);

if (!fs.existsSync(enginesPath)) {
  console.log('gray-matter/lib/engines.js not found; skipping patch');
  process.exit(0);
}

const source = fs.readFileSync(enginesPath, 'utf8');
const patched = source
  .replaceAll(
    'yaml.safeLoad.bind(yaml)',
    'function(str){ return yaml.load(str, { schema: yaml.FAILSAFE_SCHEMA }); }',
  )
  .replaceAll('yaml.safeDump.bind(yaml)', 'yaml.dump.bind(yaml)');

if (source === patched) {
  console.log('gray-matter/lib/engines.js already compatible; no patch needed');
  process.exit(0);
}

try {
  fs.writeFileSync(enginesPath, patched);
  console.log('patched gray-matter/lib/engines.js for js-yaml@4.x');
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  console.error(
    `Failed to patch gray-matter/lib/engines.js at ${enginesPath}: ${message}`,
  );
  process.exit(1);
}
