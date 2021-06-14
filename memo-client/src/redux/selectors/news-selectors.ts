import { createSelector } from 'reselect';
import { News } from '../../services';
import { NEWS_REDUCER_NAME, NEWS_INITIAL_STATE } from '../reducers/news-reducer';
import { AllStore, NewsState } from '../types';

const newsRootSelector = (state: AllStore): NewsState => state[NEWS_REDUCER_NAME] || NEWS_INITIAL_STATE;

export const newsSelector = createSelector(
  [newsRootSelector],
  ({ news }): Array<News> => news
);

export const lastNewsSelector = createSelector(
  [newsSelector],
  (news): News => news[0] || {}
);