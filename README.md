# Gandalf

Gandalf is a shared packages and library to be consumed by multi purposes Apps. Likely MOLA, SSTV, interTV and so forth..

## Getting Started
npm link
npm link gandalf

## How to use
cd `~/gandalf/lib && npm link`
cd `~/mola-web/node_modules && npm link gandalf`

if you encounter issue
```
gyp: No Xcode or CLT version detected!
gyp ERR! configure error
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:345:16)
gyp ERR! stack     at ChildProcess.emit (events.js:182:13)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:239:12)
gyp ERR! System Darwin 18.0.0
gyp ERR! command "/usr/local/Cellar/node/10.9.0/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /usr/local/lib/node_modules/gandalf/node_modules/bcrypt
gyp ERR! node -v v10.9.0
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! bcrypt@0.7.8 install: `node-gyp rebuild`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the bcrypt@0.7.8 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/gloryvibes/.npm/_logs/2018-10-09T08_24_38_069Z-debug.log
```

simply follow the steps on *How to use*