import {promisify} from 'util';
const readdir = promisify(require('readdir-scoped-modules'))

const installedShallow = async ({globalDir, localDir, flatOptions}, opts) => {
  const names = global => readdir(global ? globalDir : localDir)
  const { conf: { argv: { remain } } } = opts
  if (remain.length > 3)
    return null

  const { global } = flatOptions
  const locals = global ? [] : await names(false)
  const globals = (await names(true)).map(n => global ? n : `${n} -g`)
  return [...locals, ...globals]
}

export default installedShallow;
