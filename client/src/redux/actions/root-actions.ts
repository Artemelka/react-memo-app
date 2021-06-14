import {
  DispatchBaseAction,
  DispatchFullActions,
  PanelItem,
} from '../types';

const INCREMENT = 'INCREMENT';
export const incrementAction: DispatchBaseAction = () => ({
  type: INCREMENT
});

const DECREMENT = 'DECREMENT';
export const decrementAction: DispatchBaseAction = () => ({
  type: DECREMENT
});

const START_LOADING = 'START_LOADING';
export const startLoadingAction: DispatchBaseAction = () => ({
  type: START_LOADING
});

const STOP_LOADING = 'STOP_LOADING';
export const stopLoadingAction: DispatchBaseAction = () => ({
  type: STOP_LOADING
});

const SET_ACTIVE_PANEL_ID = 'SET_ACTIVE_PANEL_ID';
export const setActivePanelIdAction: DispatchFullActions<string> = (payload) => ({
  type: SET_ACTIVE_PANEL_ID,
  payload,
});

const ADD_PANEL = 'ADD_PANEL';
export const addPanelAction: DispatchFullActions<PanelItem> = (payload) => ({
  type: ADD_PANEL,
  payload,
});

const REMOVE_PANEL = 'REMOVE_PANEL';
export const removePanelAction: DispatchFullActions<string> = (payload) => ({
  type: REMOVE_PANEL,
  payload,
});

const CHANGE_PANEL = 'CHANGE_PANEL';
export const changePanelAction: DispatchFullActions<PanelItem> = (payload) => ({
  type: CHANGE_PANEL,
  payload,
});


export const ROOT_ACTIONS = {
  ADD_PANEL,
  DECREMENT,
  INCREMENT,
  REMOVE_PANEL,
  SET_ACTIVE_PANEL_ID,
  START_LOADING,
  STOP_LOADING,
  CHANGE_PANEL,
};