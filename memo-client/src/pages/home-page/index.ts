import { AppRouterProps } from '../types';
import { HomePage } from './home-page';
import { HOME_PAGE_PATH } from './constants';

export const HOME_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: HomePage,
  path: HOME_PAGE_PATH,
  name: 'home',
};