# Gandalf

Gandalf is a shared packages and library to be consumed by multi purposes Apps. Likely MOLA, SSTV, interTV and so forth..

## Getting Started
`yarn add @supersoccer/gandalf`

if folders are not updated, copy and paste this into terminal root folder.
> git config core.ignorecase false

## How to use
const gandalf = process.env.REACT_APP_ENV === 'development ? `require('~/gandalf')` : `require('@supersoccer/gandalf')`
const { getAction, getReducer, getComponent } = gandalf;
const LazyLoad = getComponent('LazyLoad');


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


`~/components/Header/Header.js`
```
import { getComponent } from '../../../../gandalf';
const LazyLoad = getComponent('LazyLoad');

const { getComponent } = require('@supersoccer/gandalf');
const Theoplayer = getComponent('theoplayer');
```

simply follow the steps on *How to use*