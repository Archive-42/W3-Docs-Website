import isWindows from './is-windows.js';
import isWindowsBash from './is-windows-bash.js';
export default isWindows && !isWindowsBash;
