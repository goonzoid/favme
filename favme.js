#!/usr/bin/env node

var fs = require("fs");
var exec = require("child_process").exec;

var placeholderFaviconPath = process.env["HOME"] + "/.favicon.ico";

var copyPlaceholderFavicon = function() {
  exec("cp " + placeholderFaviconPath + " favicon.ico",
    function(err, stdout, stderr) {
      if (err !== null) {
        console.log("error copying favicon.ico: " + err);
        return;
      }
      console.log("favicon.ico created!");
    }
  );
};

if (fs.existsSync("./favicon.ico")) {
  console.log("favicon.ico already present - aborting");
  process.exit(0);
}

if (!fs.existsSync(placeholderFaviconPath)) {
  console.log("placeholder favicon.ico not found");
  console.log("please add a .favicon.ico file to your home directory");
  process.exit(0);
}

copyPlaceholderFavicon();

