# favme

favme is a small command line utility which allows the quick creation of
favicon.ico files. It's arguably a pointless tool, but was a fun little learning
exercise for me; it's my first node cli tool.

As a web developer, I get sick of seeing all those 404s in my server console
output, but I rarely care quite enough to go and find a real favicon.ico file
early on in the development of a new site. (Yes, I know I could just `touch
favicon.ico`, but where's the fun in that?)

favme works by copying a placeholder `.favicon.ico` file from your home
directory into the current directory. It won't overwrite an existing
`favicon.ico` file.

## Installation

Installation couldn't be simpler:

    npm install -g favme

You will then have the `favme` command available for use.

## Use

Simply make sure a placeholder `.favicon.ico` file exists in your home directory
and then run `favme` from the root of the public directory of your web
application, or wherever you want the `favicon.ico` file to appear.
