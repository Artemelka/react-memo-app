import { News } from '../../services';
import { NEWS_REDUCER_NAME, NEWS_INITIAL_STATE } from '../reducers/news-reducer';
import { AllStore } from '../types';

export const newsSelector = ({
  [NEWS_REDUCER_NAME]: { news } = NEWS_INITIAL_STATE
}: AllStore): Array<News> => news;

export const lastNewsSelector = ({
  [NEWS_REDUCER_NAME]: { news } = NEWS_INITIAL_STATE
}: AllStore): News => news[0] || {};