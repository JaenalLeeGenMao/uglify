"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theoLibraryLocation = exports.theoStyle = exports.theoScripts = void 0;
var licenseURL = 'https://cdn.myth.theoplayer.com/4fe4ea82-0988-4dae-9ffa-07ceae5aa42a';
/* license yg update comotv.com */
// 'https://cdn.theoplayer.com/dash/c35696ca-473e-407e-abbf-1aef95c847f8';
// 'https://cdn.theoplayer.com/dash/eaa9cf5e-0523-4d6c-b24a-0f8c7260f79c';
// const licenseURL = 'https://cdn.theoplayer.com/dash/theoplayer';

var script = [// {
//   src: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
//   id: 'sdkloaderjs'
// },
{
  src: 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramewor:1',
  id: 'castsenderjs'
}, {
  src: "".concat(licenseURL, "/THEOplayer.js"),
  id: 'theoplayerjs'
}];
var theoScripts = script;
exports.theoScripts = theoScripts;
var style = [{
  id: 'uiTheo',
  rel: 'stylesheet',
  type: 'text/css',
  href: "".concat(licenseURL, "/ui.css"),
  media: 'all'
}];
var theoStyle = style;
exports.theoStyle = theoStyle;
var theoLibraryLocation = "".concat(licenseURL, "/"); //theoplayer --> license key for dummy video
//theoplayer --> licensekey real

exports.theoLibraryLocation = theoLibraryLocation;