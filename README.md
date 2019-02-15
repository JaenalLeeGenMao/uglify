# Gandalf

Gandalf is a shared packages and library to be consumed by multi purposes Apps. Likely MOLA, SSTV, interTV and so forth..

## Getting Started
`yarn add @supersoccer/gandalf`

if folders are not updated, copy and paste this into terminal root folder.
> git config core.ignorecase false

## How to use

**Local use**
```
import { getAction, getReducer, getComponent } from '../../../../gandalf';
const LazyLoad = getComponent('lazyload');

render() {
  <LazyLoad src="http://aaa.jpg"/>
}
```
**NPM use**
```
const { getAction, getReducer, getComponent } = require ('@supersoccer/gandalf');
const LazyLoad = getComponent('lazyload');

render() {
  <LazyLoad src="http://aaa.jpg"/>
}
```

**Action**

`~/src/actions/[YOUR__FILE].js`
```
*IMPORT ALL ACTION*
import { getAction } from '../../../gandalf';
const { home } = getAction();

export default {
  ...home
};

*IMPORT SINGLE ACTION*
import { getAction } from '../../../gandalf'
const { home: { getHomePlaylist } } = getAction('home')

export default {
  getHomePlaylist
};
```

**Handler**

`~/src/api/auth/handler.js`
```
import { getApi } from '@supersoccer/gandalf';
import { get } from 'axios';
const Auth = getApi('auth/handler');
import { AUTH_BASE_ENDPOINT } from './endpoints';

export default {
  createNewUser: Auth.createNewUser,
  verifyUserToken: Auth.verifyUserToken,
  resendUserToken: Auth.resendUserToken,
  requestLogin: Auth.requestLogin,
  requestLogout: Auth.requestLogout,
  emailForgotPassword: Auth.emailForgotPassword,
  verifyPasswordToken: Auth.verifyPasswordToken,
  updateNewPassword: Auth.updateNewPassword,
};
```

**Reducer**

`~/src/reducers/index.js`
```
import { getReducer } from '../../../gandalf';
const { user, runtime, home, history, search, movieDetail, movieLibrary, movieStream, toastr } = getReducer();

*IMPORT ALL REDUCERS*
export default combineReducers({
  user,
  runtime,
  home,
  history,
  search,
  movieLibrary,
  movieDetail,
  toastr,
  movieStream
});
```


### Shared Component
#### Theoplayer

This is the variable properties for Theoplayer component

<table width="100%">
  <tr>
    <th><p>Property</p></th>
    <th>
      <p>Type : Default Value</p>
    </th>
    <th>
      <p>Description</p>
    </th>
  </tr>
  <tr>
    <td>movieUrl</td>
    <td><code>string : required</code></td>
    <td>Stream source url with type <code>.m3u8</code>. If DRM is set to <code>true</code> then type needed is <code>.m3u8</code> for Safari and <code>.mpd</code> for other than Safari.</td>
  </tr>
  <tr>
    <td>autoPlay</td>
    <td><code>boolean : true</code></td>
    <td>If autoplay true or not defined, the video will be played automatically in mute mode, unless <code>allowMutedAutoplay</code> is set to <code>false</code>.</td>
  </tr>
  <tr>
    <td>allowMutedAutoplay</td>
    <td><code>boolean : true</code></td>
    <td>If set to <code>false</code> then the video cannot be played automatically due to browser policy. On Chrome, the video will be played automatically only if the user engagement to play video on the domain is high.
    See <a href="https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#mei">Chrome Policy</a>.</td>
  <tr>
  <tr>
    <td>isMobile</td>
    <td><code>boolean : false</code></td>
    <td>Set the value by checking whether the video is opened in desktop web or mobile web. Safari in iOS cannot automatically play the video.</td>
  </tr>
  <tr>
    <td>className</td>
    <td><code>string : ''</code></td>
    <td>To override video player display.</td>
  </tr>
  <tr>
    <td>showBackBtn</td>
    <td><code>boolean : true</code></td>
    <td>Whether back button inside video is shown or not</td>
  </tr>
  <tr>
    <td>subtitles</td>
    <td><code>array : []</code></td>
    <td>Provide subtitle to video.</td>
  <tr>
  <tr>
    <td>poster</td>
    <td><code>string : ''</code></td>
    <td>Show poster before video play. If poster is set to <code>true</code>, the video cannot be played automatically.</td>
  </tr>
  <tr>
    <td>adsSource</td>
    <td><code>string : null</code></td>
    <td>Set preroll ads.</td>
  </tr>
  <tr>
    <td>skipVideoAdsOffset</td>
    <td><code>number : null</code></td>
    <td>The time whether the ads can be closed.</td>
  </tr>
  <tr>
    <td>adsBannerUrl</td>
    <td><code>string : null</code></td>
    <td>Set banner ads below video.</td>
  </tr>
  <tr>
    <td>adsBannerOptions</td>
    <td><code>object : null</code></td>
    <td>Set configuration for banner ads.
    <pre>
    var AdBannerOptions = {
      ipaEnabled: true,
      ipaDuration: 2, //describes how long the ad will last untill another one will be loaded. In second.
      ipaTimeOffset: 0, //describes the time between ending one ad and showing another one
      ipaVisibility: true, //If it's set to "false", the ad is normally loaded but it's visualy hidden
      closable: false //if ads can be closed or not
    };
    </pre></td>
  </tr>
  <tr>
    <td>resizeBannerAndCBarEnabled</td>
    <td><code>boolean : true</code></td>
    <td>If set to <code>true</code> then player will be resized according to banner width. If set to <code>false</code> then banner max width will be the player width.
  </tr>
  <tr>
    <td>isDRM</td>
    <td><code>boolean : false</code></td>
    <td>Whether DRM is activated or not.</td>
  </tr>
</table>

<br/>
This is the event properties for Theoplayer component

<table width="100%">
  <tr>
    <th><p>Property</p></th>
    <th>
      <p>Callback</p>
    </th>
    <th>
      <p>Description</p>
    </th>
  </tr>
  <tr>
    <td>handleOnVideoLoad</td>
    <td>player</td>
    <td>Used to return and modify player right after it is loaded.</td>
  </tr>
  <tr>
    <td>handleOnVideoPlay</td>
    <td>true/false, player</td>
    <td>Indicate that video player is played and modify function when video player is played</td>
  </tr>
  <tr>
    <td>handleOnVideoEnded</td>
    <td>true/false, player</td>
    <td>Indicate that video player has ended and modify function when video player is ended</td>
  </tr>
  <tr>
    <td>handleOnVideoPause</td>
    <td>true/false, player</td>
    <td>Indicate that video player has ended and modify function when video player is ended</td>
  </tr>
  <tr>
    <td>handleVideoTimeUpdate</td>
    <td>currentTime, player</td>
    <td>Is called every millisecond the video is playing. Can be used for feeding analytics.</td>
  </tr>
</table>
<br/>

**To use Theoplayer :**

First, import Theoplayer component from Gandalf (and style for player if needed)
```
import { getComponent } from '@supersoccer/gandalf';
const Theoplayer = getComponent('theoplayer');
import { videoPlayer } from './style';
```

then gather all parameter required for your video.
**To run simple video you can use this setting (minimal setting):**
```
render() {
  const videoSettings = {
    movieUrl: 'http://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
  };

  return (
    <Theoplayer {...videoSettings} />
  )
}
```

**To run video with ads you can use this setting:**
```
render() {
  const videoSettings = {
    className: videoPlayer,
    showBackBtn: false,
    deviceId: vuid,
    isMobile: mobileView,
    movieUrl: 'http://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
    adsSource: `${endpoints.ads}/v1/ads/ads-rubik/api/v1/get-preroll-video?params=${this.encryptPayload}`,
    skipVideoAdsOffset: 4,
    adsBannerUrl: `${endpoints.ads}/v1/ads/ads-rubik/api/v1/get-inplayer-banner?params=${this.encryptPayload}`,
    adsBannerOptions: AdBannerOptions,
  };
}
```

**To run video with DRM you can use this setting:**
```
render() {
  const videoSettings = {
    className: videoPlayer,
    showBackBtn: false,
    deviceId: vuid,
    isMobile: mobileView,
    isDRM: true, 
    movieUrl: isSafari ? 'http://119.73.158.229/redbull-fps/stream.m3u8'
        :
    'https://cdn-supersoccer-k-01.akamaized.net/Content/DASH/Live/channel(74fa5c1e-bde9-6718-e3ab-11227d90da31)/manifest.mpd?hdnts=st=1550200457~exp=1552792457~acl=/*~hmac=56352d8b8b847dca3f221808343bc03b5bce35733bdb9aa81e135caca496e138',
  };
```





simply follow the steps on *How to use*