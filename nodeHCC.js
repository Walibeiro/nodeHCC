#! /usr/bin/env node
/**
* nodeHCC
* https://github.com/Walibeiro/nodeHCC
*
* Copyright (c) 2016 Walison Ribeiro da Silva
* Licensed under the GPL license.
*/

'use strict';

var path = require('path');
var binPath = path.join(__dirname, 'bin');
var binLocation = path.join(binPath, 'HCC.exe');

const
  spawn = require('child_process').spawn,
  hcc = spawn(binLocation);

/*
hcc.stdout.on( 'data', data => {
    console.log( `stdout: ${data}` );
});

hcc.stderr.on( 'data', data => {
    console.log( `stderr: ${data}` );
});

hcc.on( 'close', code => {
    console.log( `child process exited with code ${code}` );
});
*/