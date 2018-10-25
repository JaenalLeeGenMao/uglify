let script = [
  { src: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js', id:'sdkloaderjs' },
  { src: 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramewor:1',
    id: 'castsenderjs'
  },
  { src: `https://cdn.theoplayer.com/dash/theoplayer/THEOplayer.js`,
    id: 'theoplayerjs'
  }
]

export const theoScripts = script;

let style = [
  { id: 'uiTheo', rel: 'stylesheet', type: 'text/css', href: `https://cdn.theoplayer.com/dash/theoplayer/ui.css`, media: 'all' }
]

export const theoStyle = style;

export const theoLibraryLocation = 'https://cdn.theoplayer.com/dash/theoplayer/';