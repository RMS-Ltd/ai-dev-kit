#!/usr/bin/env node
'use strict';

/**
 * gray-matter@4.0.3 pins js-yaml ^3 and calls safeLoad/safeDump (removed in js-yaml 4).
 * With npm overrides forcing js-yaml@4.2.0, patch engines to use load/dump instead.
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
  .replaceAll('yaml.safeLoad.bind(yaml)', 'yaml.load.bind(yaml)')
  .replaceAll('yaml.safeDump.bind(yaml)', 'yaml.dump.bind(yaml)');

if (source === patched) {
  console.log('gray-matter/lib/engines.js already compatible; no patch needed');
  process.exit(0);
}

fs.writeFileSync(enginesPath, patched);
console.log('patched gray-matter/lib/engines.js for js-yaml@4.x');
