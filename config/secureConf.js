#!/usr/bin/env node

var SecureConf = require('secure-conf');
var sconf = new SecureConf();

sconf.encryptFile(
  "./default.json",
  "./default.json.enc",
  function(err, f, ef, ec) {
    if (err) {
      consoel.log("failed to encrypt %s, error is %s", f, err);
    } else {
      console.log("encrypt %s to %s complete.", f, ef);
      console.log("encrypted contents are %s", ec);
    }
  }
);