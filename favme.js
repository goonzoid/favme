#!/usr/bin/env node

var fs = require('fs');

var faviconExists = function() {
  return fs.existsSync("./favicon.ico");
};

var placeholderFaviconExists = function() {
  return fs.existsSync(process.env["HOME"] + "/.favicon.ico");
};

if (faviconExists()) {
  console.log("favicon.ico already present - aborting");
  process.exit(0);
}

if (!placeholderFaviconExists()) {
  console.log("placeholder favicon.ico not found");
  console.log("please add a .favicon.ico file to your home directory");
  process.exit(0);
}

