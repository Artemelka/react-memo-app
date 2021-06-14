import { NEWS_ACTIONS } from '../actions/news-actions';
import { FullAction, NewsState } from '../types';

export const NEWS_INITIAL_STATE: NewsState = {
  news: [],
};

export const NEWS_REDUCER_NAME = 'fake-news';
export const newsReducer = (state: NewsState = NEWS_INITIAL_STATE, { type, payload }: FullAction<any>) => {
  switch (type) {
    case NEWS_ACTIONS.SET_NEWS:
      return { ...state, news: payload };
    default:
      return state;
  }
}