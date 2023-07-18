const path = require("path");
const a = path.basename("/foo/bar/baz/asdf/quux.html");
// it  is used to know the file name .

const b = path.dirname("/foo/bar/baz/asdf/quux.html");
// it  is used to know the path or directory 

const c = path.extname("/foo/bar/baz/asdf/quux.html");
// it  is used to know the extension name .
console.log(a);
console.log(b);
console.log(c);
