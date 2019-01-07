'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CryptoJS = require('crypto-js');

var encrypt = exports.encrypt = function encrypt(text, encryptKey) {
  var ciphertext = void 0;
  if (text && encryptKey) {
    try {
      ciphertext = CryptoJS.AES.encrypt(text, encryptKey);
    } catch (e) {
      console.error(e);
    };
  }
  return ciphertext;
};

var decrypt = exports.decrypt = function decrypt(text, encryptKey) {
  var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CryptoJS.enc.Utf8;

  var plaintext = void 0;

  if (text && encryptKey) {
    try {
      var bytes = CryptoJS.AES.decrypt(text.toString(), encryptKey);
      plaintext = bytes.toString(encoding);
    } catch (e) {
      console.error(e);
    };
  }
  return plaintext;
};