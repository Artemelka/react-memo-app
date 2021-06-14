import React from 'react';
import { createStore, Middleware, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
// @ts-ignore
// import logger from 'redux-logger';
import { appHistory, appReducer } from '../../../redux';
import { APP_ROUTES } from '../../../pages';

const middlewares: Array<Middleware> = [
  routerMiddleware(appHistory),
  ReduxThunk,
  // logger,
];

const appStore = createStore(appReducer, applyMiddleware(...middlewares));

export const App = () => (
  <Provider store={appStore}>
    <ConnectedRouter history={appHistory}>
      <Switch>
        {APP_ROUTES.map(routeProps => (
          <Route {...routeProps} key={routeProps.path}/>
        ))}
      </Switch>
    </ConnectedRouter>
  </Provider>
);
