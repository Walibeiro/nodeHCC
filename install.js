// Copyright 2016 Walison Ribeiro da Silva

'use strict'

var https = require('https');
var path = require('path');
var fs = require('fs');

var mkdirSync = function (binPath) {
  try {
    fs.mkdirSync(binPath);
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}

var downloadBinary = function (binPath) {
  mkdirSync(binPath);  
  var binLocation = path.join(binPath, 'HCC.exe');
  var file = fs.createWriteStream(binLocation);
  var url = 'https://raw.githubusercontent.com/Walibeiro/Hope/master/Binaries/';                                                           

  if (process.platform == 'win32') {
    if (process.arch == 'x86')
      url = url.concat('x86/HCC.exe')
    else 
    if (process.arch == 'x64')
      url = url.concat('x64/HCC.exe');
    else
      throw "This platform is not supported yet"
    }
  else 
  if (process.platform == 'win64')
    url = url.concat('x64/HCC.exe')
  else
    throw "This platform is not supported yet"

  var request = https.get(url, function(response) {
    console.log('Download binary command-line compiler');
    response.pipe(file);                       
    file.on('finish', function() {
      console.log('Done');
    });                                  
  });
}

downloadBinary(path.join(__dirname, 'bin'));