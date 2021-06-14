import { Dispatch } from 'redux';
import { photoRequest, pokePhotoRequest } from '../../api';
import { photoHasPokemonSelector } from '../selectors/photo-selectors';
import {
  FullAction,
  PhotoList,
  Params,
  DispatchBaseAction,
  Pokemon,
  ThunkAction,
} from '../types';

const SET_PHOTO = 'SET_PHOTO';
export const setPhotoAction = (payload: PhotoList): FullAction<PhotoList> => ({
  type: SET_PHOTO,
  payload,
});

const SET_COUNT = 'SET_COUNT';
export const setCountAction = (payload: number): FullAction<number> => ({
  type: SET_COUNT,
  payload,
});

const SET_LIMIT = 'SET_LIMIT';
export const setLimitAction = (payload: number): FullAction<number> => ({
  type: SET_LIMIT,
  payload,
});

const SET_OFFSET = 'SET_OFFSET';
export const setOffsetAction = (payload: number): FullAction<number> => ({
  type: SET_OFFSET,
  payload,
});

const SET_PHOTO_LOADING_START = 'SET_PHOTO_LOADING_START';
export const setPhotoLoadingStartAction: DispatchBaseAction = () => ({
  type: SET_PHOTO_LOADING_START,
});

const SET_PHOTO_LOADING_STOP = 'SET_PHOTO_LOADING_STOP';
export const setPhotoLoadingStopAction: DispatchBaseAction = () => ({
  type: SET_PHOTO_LOADING_STOP,
});

const SET_POKEMON = 'SET_POKEMON';
export const setPokemonAction = (payload: Pokemon): FullAction<Pokemon> => ({
  type: SET_POKEMON,
  payload,
});

const START_POKEMON_IS_LOADING = 'START_POKEMON_IS_LOADING';
export const startPokemonIsLoadingAction: DispatchBaseAction = () => ({
  type: START_POKEMON_IS_LOADING,
});

const STOP_POKEMON_IS_LOADING = 'STOP_POKEMON_IS_LOADING';
export const stopPokemonIsLoadingAction: DispatchBaseAction = () => ({
  type: STOP_POKEMON_IS_LOADING,
});

const SET_HAS_POKEMON = 'SET_HAS_POKEMON';
export const setHasPokemonAction: DispatchBaseAction = () => ({
  type: SET_HAS_POKEMON,
});

export const fetchPhotos = (params: Params) =>
  async (dispatch: Dispatch) => {
    dispatch(setPhotoLoadingStartAction());

    try {
      const { results, count } = await photoRequest(params);

      dispatch(setPhotoAction(results));
      dispatch(setCountAction(count));
    } catch (error) {
      console.error('=== fetchPhotos error ===', error);
    } finally {
      dispatch(setPhotoLoadingStopAction());
    }
  };

export const fetchPokePhoto: ThunkAction<string> = (url: string) =>
  async (dispatch, getState) => {
    dispatch(startPokemonIsLoadingAction());

    const hasPokemon = photoHasPokemonSelector(getState());

    if (!hasPokemon) {
      dispatch(setHasPokemonAction());
    }

    try {
      const response = await pokePhotoRequest(url);

      dispatch(setPokemonAction(response));
    } catch (error) {
      console.error('=== fetchPokePhoto error ===', error);
    } finally {
      dispatch(stopPokemonIsLoadingAction());
    }
  };

export const PHOTO_ACTIONS = {
  SET_COUNT,
  SET_LIMIT,
  SET_OFFSET,
  SET_PHOTO,
  SET_PHOTO_LOADING_START,
  SET_PHOTO_LOADING_STOP,
  SET_POKEMON,
  START_POKEMON_IS_LOADING,
  STOP_POKEMON_IS_LOADING,
  SET_HAS_POKEMON,
};