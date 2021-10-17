import isWindows from './is-windows.js';

export default isWindows &&
  (/^MINGW(32|64)$/.test(process.env.MSYSTEM) || process.env.TERM === 'cygwin');
