# Gandalf

Gandalf is a shared packages and library to be consumed by multi purposes Apps. Likely MOLA, SSTV, interTV and so forth..

## Getting Started
npm link
npm link gandalf

## How to use
cd `~/gandalf/lib && npm link`
cd `~/mola-web/node_modules && npm link gandalf`

if you encounter issue on import gandalf

`~/src/actions/[YOUR__FILE].js`
```
*IMPORT ALL ACTION*
import { getAction } from '../../../gandalf'
const home = getAction('home')

export default {
  ...home
};

*IMPORT SINGLE ACTION*
import { getAction } from '../../../gandalf'
const { getHomePlaylist } = getAction('home')

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
const LazyLoad = getComponent('LazyLoad')
```

simply follow the steps on *How to use*