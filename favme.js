#!/usr/bin/env node

var fs = require('fs');
var placeholderFaviconPath = process.env["HOME"] + "/.favicon.ico";

var faviconExists = function() {
  return fs.existsSync("./favicon.ico");
};

if (faviconExists()) {
  console.log("favicon.ico already present - aborting");
  process.exit(0);
}

if (!fs.existsSync(placeholderFaviconPath)) {
  console.log("placeholder favicon.ico not found");
  console.log("please add a .favicon.ico file to your home directory");
  process.exit(0);
}

