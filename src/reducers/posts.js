import { handleActions } from 'redux-actions';
import { postLoadFailedAction, postLoadStartAction, postLoadCompleteAction } from 'actions/posts';

const defaultState = {
  items: [],
  loading: false 
};
export default handleActions({
  [postLoadStartAction]: (state) => {
    return {
      ...state,
      loading: true
    };
  },
  [postLoadFailedAction]: (state) => {
    return {
      ...state,
      loading: false
    };
  },
  [postLoadCompleteAction]: (state) => {
    return {
      ...state,
      loading: false,
      items: action.payload
    };
  }
}, defaultState);