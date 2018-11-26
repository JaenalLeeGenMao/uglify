'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
            coverTitle = _playlist$attributes$.title,
            coverBG = _playlist$attributes$.background,
            coverBGColor = _playlist$attributes$.backgroundColor;

        return {
          id: id,
          title: title,
          sortOrder: sortOrder,
          description: description,
          shortDescription: shortDescription || '',
          iconUrl: iconUrl || '',
          coverTitle: coverTitle,
          background: coverBG,
          backgroundColor: coverBGColor || '#000622',
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
            coverTitle = _video$attributes$ima.title,
            coverBG = _video$attributes$ima.background,
            coverBGColor = _video$attributes$ima.backgroundColor;

        return {
          id: id,
          title: title,
          displayOrder: displayOrder,
          description: description,
          shortDescription: shortDescription || '',
          coverTitle: coverTitle,
          background: coverBG,
          backgroundColor: coverBGColor || '#000622',
          isDark: isDark || 0,
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
          playlists = _result$attributes2.playlists,
          images = _result$attributes2.images,
          quotes = _result$attributes2.quotes,
          trailers = _result$attributes2.trailers,
          shortDescription = _result$attributes2.shortDescription,
          people = _result$attributes2.people,
          isDark = _result$attributes2.isDark,
          year = _result$attributes2.year;

      return {
        id: id,
        title: title,
        playlists: playlists,
        quotes: quotes,
        trailers: trailers,
        shortDescription: shortDescription,
        people: people,
        isDark: isDark,
        year: year,
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
        var title = attributes.title,
            thumbnail = attributes.thumbnail,
            coverUrl = attributes.coverUrl;

        return {
          genreTitle: genreTitle,
          id: id,
          title: title,
          thumbnail: thumbnail || coverUrl
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

var normalizeVideoStream = function normalizeVideoStream(response) {
  var data = response.data.data;

  if (data && data.length > 0) {
    return data.map(function (result) {
      var id = result.id,
          _result$attributes3 = result.attributes,
          streamSourceUrl = _result$attributes3.streamSourceUrl,
          subtitles = _result$attributes3.subtitles;

      return {
        id: id,
        streamSourceUrl: streamSourceUrl,
        subtitles: subtitles
      };
    });
  }
  return [];
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
  normalizeVideoStream: normalizeVideoStream
};