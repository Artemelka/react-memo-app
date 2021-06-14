import { ROOT_ACTIONS } from '../actions/root-actions';
import { FullAction, RootStore } from '../types';

const CHECK_LIST_INIT = {
  point_1: false,
  point_2: false,
  point_3: false,
  point_4: false,
  point_5: false,
};

const CONTENT_DATA = {
  checkList: CHECK_LIST_INIT,
};

export const ROOT_INITIAL_STATE: RootStore = {
  activePanelId: '',
  counter: 0,
  isAppLoading: false,
  panelCollection: [...new Array(3)].map((_, index) => ({
    id: `${index}`,
    title: `panel ${index + 1}`,
    contentData: CONTENT_DATA
  })),
};

type AllActions = FullAction<any>;

export const ROOT_REDUCER_NAME = 'root';
export const rootReducer = (state: RootStore = ROOT_INITIAL_STATE, { type, payload }: AllActions) => {
  switch (type) {
    case ROOT_ACTIONS.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ROOT_ACTIONS.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ROOT_ACTIONS.START_LOADING:
      return { ...state, isAppLoading: true };
    case ROOT_ACTIONS.STOP_LOADING:
      return { ...state, isAppLoading: false };
    case ROOT_ACTIONS.SET_ACTIVE_PANEL_ID:
      return { ...state, activePanelId: payload || '' };
    case ROOT_ACTIONS.ADD_PANEL:
      return {
        ...state,
        panelCollection: [...state.panelCollection, {
          ...payload,
          contentData: CONTENT_DATA,
        }]
      };
    case ROOT_ACTIONS.REMOVE_PANEL:
      return { ...state, panelCollection: state.panelCollection.filter(item => item.id !== payload) };
    case ROOT_ACTIONS.CHANGE_PANEL:
      return {
        ...state,
        panelCollection: state.panelCollection.map(item => {
          return item.id === payload.id ? payload : item;
        })
      };
    default:
      return state;
  }
};
