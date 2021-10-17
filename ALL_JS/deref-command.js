// de-reference abbreviations and shorthands into canonical command name

import {aliases, cmdList, plumbing} from '../utils/cmd-list.js';

const aliasNames = Object.keys(aliases)
const fullList = cmdList.concat(aliasNames).filter(c => !plumbing.includes(c))
import abbrev from 'abbrev';
const abbrevs = abbrev(fullList)

export default c => {
  if (!c || typeof c !== 'string')
    return ''

  if (c.match(/[A-Z]/))
    c = c.replace(/([A-Z])/g, m => `-${m.toLowerCase()}`)

  if (plumbing.includes(c))
    return c

  // first deref the abbrev, if there is one
  // then resolve any aliases
  // so `npm install-cl` will resolve to `install-clean` then to `ci`
  let a = abbrevs[c]
  while (aliases[a])
    a = aliases[a]

  return a || ''
};
