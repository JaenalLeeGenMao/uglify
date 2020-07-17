**CHANGELOG FORMAT | ## 2.0.1 (YYYY-MM-DD)**

## 2.0.9 (2020-07-17)
New Features::
  - Add keyboardShortcutsEnabled playerConfig props on mola-player to enable/disable keyboard shortcuts
  - Add videoId **suffix** to all existing mola-player id references *e.g. video-context-{videoId}*
  - Mola player now supports multi video references player via window.player{videoId}

## 2.0.8 (2020-07-14)
Improvement:
  - Consume autoPlay props on mola-player

## 2.0.7 (2020-07-14)
Improvement:
  - Subtitle read label and language returns via api, using country to crosscheck subtitle active state and preferredTextLanguage

## 2.0.6 (2020-07-13)
Improvement:
  - Subtitle position moves up and down depending on hover state
  - Add nextVideoEnabled to toggle next video on player
  - Change recommendation into accepting object instead of recommendation.data

## 2.0.5 (2020-07-10)
Improvement:
  - Controller button size adjust on fullscreen
  - Set default video-context font-size to 1rem and fullscreen font-size to 1.8rem
  - Mobile default font-size on fullscreen to 12px
  - All icons on mola-player controller set to read px to em

Bugfix:
  - Custom controller font color set to default #fff (mola-player)

## 2.0.4 (2020-07-07)
Bugfix:
  - Only loops subtitles when it is passed, stop player from executing

## 2.0.3 (2020-07-07)
Improvement:
  - Add origin cors on molaplayer preroll ads impression

## 2.0.2 (2020-07-07)
BugFix:
  - Remove unused global lib errorUtil

## 2.0.1 (2020-07-06)
New Features:
  - Add upcoming video button on mola-player controller
  - Consume window.globalHistory so player can use custom history provided by developer

BugFix:
  - Disable seek on live using shortcut keys

## 2.0.0 (2020-07-06)
New Features:
  - Add component mola-player

Improvement:
  - Change gandalf into pure Component library
  - Remove Action, Reducer, Webpack base config, constants folder

## 1.0.53 (2020-02-27)
Improvement:
  - Update license for whitelist domain comotv