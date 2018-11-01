let script = [
  { src: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js', id: 'sdkloaderjs' },
  {
    src: 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramewor:1',
    id: 'castsenderjs'
  },
  {
    src: `https://cdn.theoplayer.com/dash/5acd847e-4a8d-4a7b-85a4-ccfd12d5562d/THEOplayer.js`,
    id: 'theoplayerjs'
  }
]

export const theoScripts = script;

let style = [
  { id: 'uiTheo', rel: 'stylesheet', type: 'text/css', href: `https://cdn.theoplayer.com/dash/5acd847e-4a8d-4a7b-85a4-ccfd12d5562d/ui.css`, media: 'all' }
]

export const theoStyle = style;

export const theoLibraryLocation = 'https://cdn.theoplayer.com/dash/5acd847e-4a8d-4a7b-85a4-ccfd12d5562d/';
//theoplayer --> license key for dummy video
//5acd847e-4a8d-4a7b-85a4-ccfd12d5562d --> licensekey real