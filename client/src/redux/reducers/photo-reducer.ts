import { PHOTO_ACTIONS } from '../actions/photo-actions';
import { FullAction, PhotoState } from '../types';

const EMPTY_POKEMON = {
  id: NaN,
  name: '',
  height: NaN,
  weight: NaN,
  order: NaN,
};
export const PHOTO_INITIAL_STATE: PhotoState = {
  count: 0,
  hasPokemon: false,
  isLoading: true,
  isPokemonLoading: false,
  limit: 20,
  list: [],
  offset: 0,
  pokemon: EMPTY_POKEMON,
};

export const PHOTO_REDUCER_NAME = 'photo';
export const photoReducer = (state:PhotoState = PHOTO_INITIAL_STATE, { type, payload }: FullAction<any>) => {
  switch (type) {
    case PHOTO_ACTIONS.SET_PHOTO:
      return { ...state, list: payload };
    case PHOTO_ACTIONS.SET_COUNT:
      return { ...state, count: payload };
    case PHOTO_ACTIONS.SET_LIMIT:
      return { ...state, limit: payload };
    case PHOTO_ACTIONS.SET_OFFSET:
      return { ...state, offset: payload };
    case PHOTO_ACTIONS.SET_PHOTO_LOADING_START:
      return { ...state, isLoading: true };
    case PHOTO_ACTIONS.SET_PHOTO_LOADING_STOP:
      return { ...state, isLoading: false };
    case PHOTO_ACTIONS.SET_POKEMON:
      return { ...state, pokemon: payload };
    case PHOTO_ACTIONS.START_POKEMON_IS_LOADING:
      return { ...state, isPokemonLoading: true };
    case PHOTO_ACTIONS.STOP_POKEMON_IS_LOADING:
      return { ...state, isPokemonLoading: false };
    case PHOTO_ACTIONS.SET_HAS_POKEMON:
      return { ...state, hasPokemon: true };
    default:
      return state;
  }
};