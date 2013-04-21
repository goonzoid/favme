#!/usr/bin/env node

var fs = require('fs');

var faviconExists = function() {
  return fs.existsSync("./favicon.ico");
};

if (faviconExists()) {
  console.log("favicon.ico already present - aborting");
  process.exit(0);
}

