'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var licenseURL = 'https://cdn.myth.theoplayer.com/enterprise/2bd51809-5e87-41f2-95f2-bb964e8e1606';
// 'https://cdn.theoplayer.com/dash/eaa9cf5e-0523-4d6c-b24a-0f8c7260f79c';
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