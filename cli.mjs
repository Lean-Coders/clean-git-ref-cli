#!/usr/bin/env node

import cleanGitRef from 'clean-git-ref';

const args = process.argv.splice(2);
const valToClean = args.join(' ').replace(/#/g, '').toLowerCase();

console.log(cleanGitRef.clean(valToClean));
