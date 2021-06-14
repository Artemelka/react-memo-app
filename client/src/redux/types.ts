import { Action, Dispatch } from 'redux';
import { RouterState } from 'connected-react-router';
import { News } from '../services/fake-news-service';
import { ROOT_REDUCER_NAME } from './reducers/app-reducer';
import { NEWS_REDUCER_NAME } from './reducers/news-reducer';
import { PHOTO_REDUCER_NAME } from './reducers/photo-reducer';

export type FullAction<T = string> = Action<string> & {
  payload?: T,
};

export type DispatchFullActions<P> = (payload: P) => FullAction<P>;
export type DispatchBaseAction = () => Action<string>;

export type Params = {
  limit: number;
  offset: number;
};

export type Response = {
  count: number;
  results: PhotoList;
};

export type Pokemon = {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
}

export type ThunkAction<P> = (params: P) => (dispatch: Dispatch, getState: () => AllStore) => void;

export type CheckboxName = 'point_1' | 'point_2' | 'point_3' | 'point_4'| 'point_5';
export type CheckboxState = Record<CheckboxName, boolean>;
export type PanelContentData = {
  checkList: CheckboxState;
}

export type PanelItem = {
  id: string;
  title: string;
  contentData?: PanelContentData;
}

export type PhotoListItem = {
  name: string;
  url: string;
};

export type PhotoList = Array<PhotoListItem>;

export type RootStore = {
  activePanelId: string;
  counter: number;
  isAppLoading: boolean;
  panelCollection: Array<PanelItem>;
};

export type NewsState = {
  news: Array<News>;
};

export type PhotoState = {
  count: number;
  hasPokemon: boolean;
  isLoading: boolean;
  isPokemonLoading: boolean;
  limit: number;
  list: PhotoList;
  offset: number;
  pokemon: Pokemon;
}

export type AllStore = {
  router: RouterState;
  [ROOT_REDUCER_NAME]: RootStore;
  [NEWS_REDUCER_NAME]: NewsState;
  [PHOTO_REDUCER_NAME]: PhotoState;
};