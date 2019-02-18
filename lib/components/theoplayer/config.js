'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var licenseURL = 'https://cdn.theoplayer.com/dash/2dab9e64-7b63-445d-ad94-9e91ecf494b1';
// const licenseURL = 'https://cdn.theoplayer.com/dash/theoplayer';

var script = [
// {
//   src: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
//   id: 'sdkloaderjs'
// },
{
  src: 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramewor:1',
  id: 'castsenderjs'
}, {
  src: licenseURL + '/THEOplayer.js',
  id: 'theoplayerjs'
}];

var theoScripts = exports.theoScripts = script;

var style = [{
  id: 'uiTheo',
  rel: 'stylesheet',
  type: 'text/css',
  href: licenseURL + '/ui.css',
  media: 'all'
}];

var theoStyle = exports.theoStyle = style;

var theoLibraryLocation = exports.theoLibraryLocation = licenseURL + '/';
//theoplayer --> license key for dummy video
//theoplayer --> licensekey real

var verimatrixDRMConf = exports.verimatrixDRMConf = {
  fairplay: {
    certificateURL: 'http://119.73.158.229/fps-sstv/fairplay_sstv.cer',
    licenseAcquisitionURL: 'http://119.73.158.227:8064/fpsa/v1.0/'
  },
  playready: {
    licenseAcquisitionURL: 'https://pr.vmxapac.net:8065/PlayReady/rightsmanager.asmx'
  },
  widevine: {
    licenseAcquisitionURL: 'https://vmxapac.net:8063'
  }
};