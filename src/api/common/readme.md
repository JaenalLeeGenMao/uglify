# How to use this API

**HOMEPAGE**
* getHomePlaylist()

**SEARCHPAGE**
* getSearchGenre()
* getSearchResult({ q })
* getRecentSearch(sessionId, sid)
* postRecentSearch(sessionId, sid, keyword)
* deleteRecentSearchAll(sessionId, sid)
* deleteRecentSearch(sessionId, sid, keyword)

> @sessionId must be fixed to e.g. MolaBoxId, web use sessionId, MolaApp use deviceId.

| API                   | Action                                              | Params                                     | Headers                            |
| --------------------- | :-------------------------------------------------- | :-----------------------------------------:| ---------------------------------: |
| getSearchGenre        | user search >3 character                            | -                                          | -                                  |
| getSearchResult       | user search >3 character                            | { q:  keyword }                            | -                                  |
| getRecentSearch       | show upon landing page                              | { sessionId: `${sessionId}` }              | { Authorization: `Bearer ${sid}` } |
| postRecentSearch      | click a movie, fires before redirect to detail page | { q:  keyword, sessionId: `${sessionId}` } | { Authorization: `Bearer ${sid}` } |
| deleteRecentSearchAll | User click delete all recentSearchButton            | { sessionId: `${sessionId}` }              | { Authorization: `Bearer ${sid}` } |
| deleteRecentSearch    | User click X delete on recentSearch                 | { q:  keyword, sessionId: `${sessionId}` } | { Authorization: `Bearer ${sid}` } |

**LIBRARYPAGE**
* getSearchGenre()
* getMovieLibrary(id)
> @id is the movie id

**MOVIEDETAILPAGE**
* getMovieDetail({id})
* getHotPlaylist()
> @id is the movie id
