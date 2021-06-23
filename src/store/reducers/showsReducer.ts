/// <reference path="./showsReducer.d.ts"/>

import { Reducer } from 'redux';

import { initialState } from '../initialState';

export const enum ShowsActionTypes {
  FETCH_REQUEST = 'FETCH_REQUEST',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR'
}

const showsReducer: Reducer<ShowsState> = (state = initialState, action: ShowsAction) => {
  switch (action.type) {
    case ShowsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: false };
    }
    case ShowsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.resp.data };
    }
    case ShowsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.errors };
    }
    default: {
      return state;
    }
  }
};

export default showsReducer;
