import {resolve} from 'path';

export default prefix => {
  try {
    const { name } = require(resolve(prefix, 'package.json'))
    if (!name || typeof name !== 'string')
      return ''

    const split = name.split('/')
    if (split.length < 2)
      return ''

    const scope = split[0]
    return /^@/.test(scope) ? scope : ''
  } catch (er) {
    return ''
  }
};
