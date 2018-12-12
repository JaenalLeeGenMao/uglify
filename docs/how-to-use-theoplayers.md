//import { getComponent } from '../../../../gandalf'; //local
import { getComponent } from '@supersoccer/gandalf'; //npm
const Theoplayer = getComponent('theoplayer'); 
 

render() {
  var AdBannerOptions = {
    ipaEnabled: true,
    ipaDuration: 2,
    ipaTimeOffset: 0,
    ipaVisibility: true,
    // ipaNoAdsTime: ipaNoAdsTimer.value,
    closable: true,
    skipOffset: 3
  }

  const videoSettings = {
    className: videoPlayer,
    showBackBtn: false,
    isMobile: isMobile,
    movieUrl: 'https://cdn-supersoccer-k-01.akamaized.net/Content/HLS/VOD/f7ac1d01-81a3-4d56-8e15-61fa8154a555/bfef7d7e-a709-16db-4489-074535b116bc/index.m3u8?hdnts=st=1543312166~exp=1546912166~acl=/*~hmac=ac6eae831f7b0ed02c054a3ea6d4fafebf214a31a0b07921c55ca32720a3422c',

    //optional
    //theoConfig: [],
    //adsSource: 'https://api.stag.supersoccer.tv/v1/ads/ads-rubik/api/v1/get-preroll-video?params=eyJwcm9qZWN0X2lkIjoiNSIsInZpZGVvX2lkIjoic3N0diIsImFwcF9pZCI6InN1cGVyc29jY2VydHZfYWRzIiwic2Vzc2lvbl9pZCI6Im1oNWhvZXhucmQ5cHY0dHFzNGgxOXVoMmJnc3h1NzFtIiwiY2xpZW50X2lwIjoiOjoxIn0=',
    // videoType: 'video/mp4'
    // adsBannerUrl: 'http://api-d.supersoccer.tv/v1-alpha/ad-banner.json',
    // adsBannerOptions: AdBannerOptions,
    //resizeBannerAndCBarEnabled: false //kalau false maka banner sesuai parent player, kalau true maka player sesuai banner. Default true
  }

  return (
    <Theoplayer {...videoSettings}/>
  )
 }