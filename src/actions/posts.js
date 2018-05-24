import { createAction } from 'redux-actions';

export const postLoadStartAction = createAction('[Posts] LoadStart');
export const postLoadCompleteAction = createAction('[Posts] LoadComplete');
export const postLoadFailedAction = createAction('[Posts] LoadFailed');

export const postLoadAction = (dispatch) => {
  dispatch(postLoadStartAction());
  fetch((response) => response.json())
    .then((posts) => {
      dispatch(postLoadCompleteAction(posts));
    })
    .catch(() => {
      dispatch(postLoadFailedAction());
    })
}