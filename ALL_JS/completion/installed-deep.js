import {resolve} from 'path';
import Arborist from '@npmcli/arborist';
const localeCompare = require('@isaacs/string-locale-compare')('en')

const installedDeep = async ({flatOptions, globalDir}) => {
  const {
    depth,
    global,
    prefix,
  } = flatOptions

  const getValues = ({inventory}) => [...inventory.values()]
    .filter(({location, isRoot}) => location !== '' && !isRoot)
    .map(i => {
      return i
    })
    .filter(i => (i.depth - 1) <= depth)
    .sort((a, b) => (a.depth - b.depth) || localeCompare(a.name, b.name))

  const res = new Set()
  const gArb = new Arborist({ global: true, path: resolve(globalDir, '..') })
  const gTree = await gArb.loadActual({ global: true })

  for (const node of getValues(gTree))
    res.add(global ? node.name : [node.name, '-g'])

  if (!global) {
    const arb = new Arborist({ global: false, path: prefix })
    const tree = await arb.loadActual()
    for (const node of getValues(tree))
      res.add(node.name)
  }

  return [...res]
}

export default installedDeep;
