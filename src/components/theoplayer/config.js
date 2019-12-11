const licenseURL =
  'https://cdn.theoplayer.com/dash/47922f99-cd0d-4443-94d1-e790b3ce97e6'; /* license yg update comofootball.com */
// 'https://cdn.theoplayer.com/dash/c35696ca-473e-407e-abbf-1aef95c847f8';
// 'https://cdn.theoplayer.com/dash/eaa9cf5e-0523-4d6c-b24a-0f8c7260f79c';
// const licenseURL = 'https://cdn.theoplayer.com/dash/theoplayer';

let script = [
  // {
  //   src: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
  //   id: 'sdkloaderjs'
  // },
  {
    src:
      'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramewor:1',
    id: 'castsenderjs'
  },
  {
    src: `${licenseURL}/THEOplayer.js`,
    id: 'theoplayerjs'
  }
];

export const theoScripts = script;

let style = [
  {
    id: 'uiTheo',
    rel: 'stylesheet',
    type: 'text/css',
    href: `${licenseURL}/ui.css`,
    media: 'all'
  }
];

export const theoStyle = style;

export const theoLibraryLocation = `${licenseURL}/`;
//theoplayer --> license key for dummy video
//theoplayer --> licensekey real
