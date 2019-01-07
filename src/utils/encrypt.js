var CryptoJS = require('crypto-js');

export const encrypt = (text, encryptKey) => {
  let ciphertext;
  if (text && encryptKey) {
    try {
      ciphertext = CryptoJS.AES.encrypt(text, encryptKey);
    } catch (e) {
      console.error(e);
    };
  }
  return ciphertext;
}


export const decrypt = (text, encryptKey, encoding = CryptoJS.enc.Utf8) => {
  let plaintext;

  if (text && encryptKey) {
    try {
      const bytes = CryptoJS.AES.decrypt(text.toString(), encryptKey);
      plaintext = bytes.toString(encoding);
    } catch (e) {
      console.error(e);
    };
  }
  return plaintext;
}