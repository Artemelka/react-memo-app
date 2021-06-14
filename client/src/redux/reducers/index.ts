import { combineReducers } from 'redux';
import { createBrowserHistory, History } from 'history';
import { connectRouter } from 'connected-react-router';
import { rootReducer, ROOT_REDUCER_NAME } from './app-reducer';
import { newsReducer, NEWS_REDUCER_NAME } from './news-reducer';
import { photoReducer, PHOTO_REDUCER_NAME } from './photo-reducer';
import type { AllStore } from '../types';

export const appHistory: History = createBrowserHistory();

export const appReducer = combineReducers<AllStore>({
  router: connectRouter(appHistory),
  // @ts-ignore
  [ROOT_REDUCER_NAME]: rootReducer,
  // @ts-ignore
  [NEWS_REDUCER_NAME]: newsReducer,
  // @ts-ignore
  [PHOTO_REDUCER_NAME]: photoReducer,
});