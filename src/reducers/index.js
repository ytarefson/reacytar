import { combineReducers } from 'redux';

import postsReducers from './posts';

export default combineReducers({
  posts: postsReducers
});