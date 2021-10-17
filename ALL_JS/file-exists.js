import fs from 'fs';
import util from 'util';

const stat = util.promisify(fs.stat)
/*
namespace stat

function stat( path: fs.PathLike, callback: ( err: NodeJS.ErrnoException, stats: fs.Stats ) => void ): void( +3 overloads )
Asynchronous stat( 2 ).The callback gets two arguments( err, stats ) wherestats is an < fs.Stats > object.

In case ofan error, the err.code will be one of Common System Errors.

Using fs.stat() to check
for the existence of a file before callingfs.open(), fs.readFile() or fs.writeFile() is not recommended.Instead, user code should open / read / write the file

*/
const fileExists = (file) => stat(file)
  .then((stat) => stat.isFile())
  .catch(() => false)

export default fileExists;
