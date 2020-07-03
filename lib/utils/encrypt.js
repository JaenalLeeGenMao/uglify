"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrypt = exports.encrypt = void 0;

var CryptoJS = require('crypto-js');

var encrypt = function encrypt(text, encryptKey) {
  var ciphertext;

  if (text && encryptKey) {
    try {
      ciphertext = CryptoJS.AES.encrypt(text, encryptKey);
    } catch (e) {
      console.error(e);
    }

    ;
  }

  return ciphertext;
};

exports.encrypt = encrypt;

var decrypt = function decrypt(text, encryptKey) {
  var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CryptoJS.enc.Utf8;
  var plaintext;

  if (text && encryptKey) {
    try {
      var bytes = CryptoJS.AES.decrypt(text.toString(), encryptKey);
      plaintext = bytes.toString(encoding);
    } catch (e) {
      console.error(e);
    }

    ;
  }

  return plaintext;
};

exports.decrypt = decrypt;