import { action } from 'typesafe-actions';

import { ShowsActionTypes } from '../reducers/showsReducer';

export const loadShowsSuccess = (resp: any) => {
  return { type: ShowsActionTypes.FETCH_SUCCESS, resp };
};
export const loadShowsError = (message: string) => action(ShowsActionTypes.FETCH_ERROR, message);

export const loadShows = () => {
  return fetch('http://localhost:8080/json/data.json').then(response => {
    return response.json();
  });
};
