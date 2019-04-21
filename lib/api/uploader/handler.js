'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _endpoints = require('./endpoints');

var _config = require('@source/config');

var uploadImage = function uploadImage(file) {
  var body = { file: file, client_id: _config.uploader.clientId, ptoken: _config.uploader.ptoken };
  var formData = new FormData(); // Currently empty
  formData.append('file', file);
  formData.append('client_id', _config.uploader.clientId);
  formData.append('ptoken', _config.uploader.ptoken);
  return (0, _axios.post)(_endpoints.UPLOADER_ENDPOINT + '/image/upload', formData, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response.data
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var getImageCDN = function getImageCDN(path, token) {
  var params = { client_id: _config.uploader.clientId, path: path, token: token };
  console.log(params);
  return (0, _axios.get)(_endpoints.UPLOADER_ENDPOINT + '/image/status', {
    params: params
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response.data
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

exports.default = {
  uploadImage: uploadImage,
  getImageCDN: getImageCDN
};