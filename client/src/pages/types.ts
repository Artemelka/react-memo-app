import { RouteProps } from 'react-router';

export type AppRouterProps = Pick<RouteProps, 'component' | 'exact'> & {
  path: string;
  name: string;
  children?: Array<AppRouterProps>;
};