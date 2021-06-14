import { News } from '../../services';
import { FullAction } from '../types';

const SET_NEWS = 'SET_NEWS';
export const setNews = (payload: Array<News>): FullAction<Array<News>> => ({
  type: SET_NEWS,
  payload,
});

export const NEWS_ACTIONS = {
  SET_NEWS,
}