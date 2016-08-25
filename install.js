// Copyright 2016 Walison Ribeiro da Silva

'use strict'

var https = require('https');
var path = require('path');
var fs = require('fs');

var binPath = path.join(__dirname, 'bin');
var binLocation = path.join(binPath, 'HCC.exe');

var mkdirSync = function (path) {
  try {
    fs.mkdirSync(path);
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}

mkdirSync(binPath);
var file = fs.createWriteStream(binLocation);                                                           
var request = https.get("https://raw.githubusercontent.com/Walibeiro/nodeHCC/master/Binaries/x86/HCC.exe", function(response) {
  console.log('Download binary command-line compiler');
  response.pipe(file);                       
  file.on('finish', function() {
    console.log('Done');
  });                                  
});