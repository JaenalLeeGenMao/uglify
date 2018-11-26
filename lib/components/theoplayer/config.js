'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// const licenseURL = 'https://cdn.theoplayer.com/dash/2a34c3ad-fc3b-4da9-b399-bccdff7c65fd';
var licenseURL = 'https://cdn.theoplayer.com/dash/theoplayer';

var script = [{
  src: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
  id: 'sdkloaderjs'
}, {
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