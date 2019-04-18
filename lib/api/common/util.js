'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _sample2 = require('lodash/sample');

var _sample3 = _interopRequireDefault(_sample2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizeHomePlaylist = function normalizeHomePlaylist(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    return data.map(function (_ref) {
      var playlists = _ref.attributes.playlists;
      return playlists.map(function (playlist) {
        var id = playlist.id,
            type = playlist.type,
            _playlist$attributes = playlist.attributes,
            title = _playlist$attributes.title,
            description = _playlist$attributes.description,
            shortDescription = _playlist$attributes.shortDescription,
            sortOrder = _playlist$attributes.sortOrder,
            iconUrl = _playlist$attributes.iconUrl,
            isDark = _playlist$attributes.isDark,
            _playlist$attributes$ = _playlist$attributes.images.cover,
            background = _playlist$attributes$.background,
            details = _playlist$attributes$.details,
            coverBGColor = _playlist$attributes$.backgroundColor;

        return {
          id: id,
          title: title,
          sortOrder: sortOrder,
          description: description,
          shortDescription: shortDescription || '',
          iconUrl: iconUrl || '',
          // coverTitle: coverTitle,
          background: background,
          backgroundColor: coverBGColor || '#000622',
          details: details,
          isDark: isDark || 0,
          isActive: false,
          type: type
        };
      }).sort(function (a, b) {
        return a.sortOrder - b.sortOrder;
      });
    });
  }
  return [];
};

var normalizeHomeVideo = function normalizeHomeVideo(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    var result = data.map(function (_ref2) {
      var videos = _ref2.attributes.videos;
      return videos.map(function (video) {
        var id = video.id,
            type = video.type,
            _video$attributes = video.attributes,
            title = _video$attributes.title,
            description = _video$attributes.description,
            shortDescription = _video$attributes.shortDescription,
            displayOrder = _video$attributes.displayOrder,
            isDark = _video$attributes.isDark,
            _video$attributes$ima = _video$attributes.images.cover,
            details = _video$attributes$ima.details,
            background = _video$attributes$ima.background,
            coverBGColor = _video$attributes$ima.backgroundColor,
            quoteLists = _video$attributes.quotes,
            dummyQuote = {
          attributes: {
            author: 'Comming Soon',
            imageUrl: '',
            role: 'Media',
            text: title
          },
          id: 1,
          type: 'quotes'
        };

        return {
          id: id,
          title: title,
          displayOrder: displayOrder,
          description: description,
          shortDescription: shortDescription || '',
          // coverTitle: coverTitle,
          background: background,
          backgroundColor: coverBGColor || '#000622',
          details: details,
          isDark: isDark || 0,
          quotes: quoteLists.length > 0 ? quoteLists[0] : dummyQuote,
          type: type
        };
      }).sort(function (a, b) {
        return a.displayOrder - b.displayOrder;
      });
    });
    return result;
  }
  return [];
};

var normalizeHistory = function normalizeHistory(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    return data.map(function (movieHistory) {
      var historyId = movieHistory.id;
      var attr = movieHistory.attributes;
      var timePosition = attr.timePosition;
      var videoId = attr.videoId;
      return attr.videos.map(function (_ref3) {
        var attributes = _ref3.attributes;
        var title = attributes.title,
            coverUrl = attributes.coverUrl,
            duration = attributes.duration,
            chapter = attributes.chapter,
            thumbnail = attributes.thumbnail;


        return {
          historyId: historyId,
          videoId: videoId,
          timePosition: timePosition,
          title: title,
          chapter: chapter,
          thumbnail: thumbnail ? thumbnail[0] : coverUrl,
          duration: duration || 0
        };
      });
    });
  }
  return {
    meta: {
      status: 'no_result'
    },
    data: []
  };
};

var normalizeSearchResult = function normalizeSearchResult(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    return data.map(function (result) {
      var id = result.id,
          type = result.type,
          _result$attributes = result.attributes,
          title = _result$attributes.title,
          year = _result$attributes.year,
          coverUrl = _result$attributes.coverUrl,
          name = _result$attributes.name,
          imageUrl = _result$attributes.imageUrl;


      if (type == 'videos') {
        return {
          id: id,
          type: type,
          title: title,
          year: year,
          coverUrl: coverUrl
        };
      } else {
        return {
          id: id,
          type: type,
          name: name,
          imageUrl: imageUrl
        };
      }
    });
  }
  return [];
};

var normalizeSearchGenre = function normalizeSearchGenre(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    return data.map(function (_ref4) {
      var playlists = _ref4.attributes.playlists;
      return playlists.map(function (_ref5) {
        var id = _ref5.id,
            attributes = _ref5.attributes;
        var title = attributes.title,
            iconUrl = attributes.iconUrl;

        return {
          id: id,
          title: title,
          iconUrl: iconUrl
        };
      });
    });
  }
  return [];
};

var normalizeRecentSearch = function normalizeRecentSearch(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    return data.map(function (_ref6) {
      var id = _ref6.id,
          keyword = _ref6.attributes.keyword;

      return {
        id: id,
        keyword: keyword
      };
    });
  }
  return [];
};

var normalizeVideoDetail = function normalizeVideoDetail(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    return data.map(function (result) {
      var id = result.id,
          _result$attributes2 = result.attributes,
          title = _result$attributes2.title,
          images = _result$attributes2.images,
          quotes = _result$attributes2.quotes,
          trailers = _result$attributes2.trailers,
          description = _result$attributes2.description,
          source = _result$attributes2.source,
          streamSourceUrl = _result$attributes2.streamSourceUrl,
          subtitles = _result$attributes2.subtitles,
          people = _result$attributes2.people,
          genre = _result$attributes2.genre,
          isDark = _result$attributes2.isDark,
          year = _result$attributes2.year,
          duration = _result$attributes2.duration;

      var filteredSubtitles = subtitles.map(function (subtitle) {
        var id = subtitle.id,
            type = subtitle.type,
            _subtitle$attributes = subtitle.attributes,
            locale = _subtitle$attributes.locale,
            url = _subtitle$attributes.url,
            format = _subtitle$attributes.format;
        /* More info please visit https://support.theoplayer.com/hc/en-us/articles/214041829-TextTrack-API */

        return {
          id: id,
          format: format /* srt, emsg, eventstream, ttml, webvtt */
          , locale: locale,
          type: type /* subtitles, captions, descriptions, chapters, metadata */
          , url: url
        };
      });
      return {
        id: id,
        title: title,
        quotes: quotes,
        trailers: trailers,
        description: description,
        source: source,
        streamSourceUrl: streamSourceUrl,
        subtitles: filteredSubtitles,
        people: people,
        genre: genre,
        isDark: isDark,
        year: year,
        duration: duration,
        images: images
      };
    });
  }
  return {
    meta: {
      status: 'no_result'
    },
    data: []
  };
};

var normalizeMovieLibrary = function normalizeMovieLibrary(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    return data.map(function (_ref7) {
      var _ref7$attributes = _ref7.attributes,
          videos = _ref7$attributes.videos,
          genreTitle = _ref7$attributes.title;
      return videos.map(function (_ref8) {
        var id = _ref8.id,
            attributes = _ref8.attributes;
        var title = attributes.title;

        var thumbnail = (0, _get3.default)(attributes, 'images.cover.library.portrait', '');
        var description = (0, _get3.default)(attributes, 'description', '');
        var quotes = (0, _get3.default)(attributes, 'quotes[0].attributes', '');
        var isDark = (0, _get3.default)(attributes, 'isDark', '0');

        return {
          genreTitle: genreTitle,
          id: id,
          title: title,
          thumbnail: thumbnail,
          description: description,
          quotes: quotes,
          isDark: isDark
        };
      });
    });
  }
  return {
    meta: {
      status: 'no_result'
    },
    data: []
  };
};

var normalizeMovieLibraryList = function normalizeMovieLibraryList(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    return data.map(function (_ref9) {
      var id = _ref9.id,
          type = _ref9.type,
          _ref9$attributes = _ref9.attributes,
          genreTitle = _ref9$attributes.title,
          videoDesc = _ref9$attributes.description,
          videoImg = _ref9$attributes.images;

      return {
        id: id,
        type: type,
        genreTitle: genreTitle,
        videoDesc: videoDesc,
        thumbnail: videoImg.cover.library.portrait
      };
    });
  }
  return {
    meta: {
      status: 'no_result'
    },
    data: []
  };
};

exports.default = {
  normalizeHomePlaylist: normalizeHomePlaylist,
  normalizeHomeVideo: normalizeHomeVideo,
  normalizeHistory: normalizeHistory,
  normalizeSearchResult: normalizeSearchResult,
  normalizeSearchGenre: normalizeSearchGenre,
  normalizeRecentSearch: normalizeRecentSearch,
  normalizeVideoDetail: normalizeVideoDetail,
  normalizeMovieLibrary: normalizeMovieLibrary,
  normalizeMovieLibraryList: normalizeMovieLibraryList
};