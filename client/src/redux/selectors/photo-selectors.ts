import { PHOTO_REDUCER_NAME, PHOTO_INITIAL_STATE } from '../reducers/photo-reducer';
import { AllStore, PhotoList, Pokemon } from '../types';

export const photoListSelector = ({
  [PHOTO_REDUCER_NAME]: { list } = PHOTO_INITIAL_STATE
}: AllStore): PhotoList => list;

export const photoCountSelector = ({
  [PHOTO_REDUCER_NAME]: { count } = PHOTO_INITIAL_STATE
}: AllStore): number => count;

export const photoLimitSelector = ({
  [PHOTO_REDUCER_NAME]: { limit } = PHOTO_INITIAL_STATE
}: AllStore): number => limit;

export const photoOffsetSelector = ({
  [PHOTO_REDUCER_NAME]: { offset } = PHOTO_INITIAL_STATE
}: AllStore): number => offset;

export const photoIsLoadingSelector = ({
  [PHOTO_REDUCER_NAME]: { isLoading } = PHOTO_INITIAL_STATE
}: AllStore): boolean => isLoading;

export const photoPokemonSelector = ({
  [PHOTO_REDUCER_NAME]: { pokemon } = PHOTO_INITIAL_STATE
}: AllStore): Pokemon => pokemon;

export const photoPokemonIsLoadingSelector = ({
  [PHOTO_REDUCER_NAME]: { isPokemonLoading } = PHOTO_INITIAL_STATE
}: AllStore): boolean => isPokemonLoading;

export const photoHasPokemonSelector = ({
  [PHOTO_REDUCER_NAME]: { hasPokemon } = PHOTO_INITIAL_STATE
}: AllStore): boolean => hasPokemon;
