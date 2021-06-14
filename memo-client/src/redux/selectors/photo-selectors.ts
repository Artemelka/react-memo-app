import { createSelector } from 'reselect';
import { PHOTO_REDUCER_NAME, PHOTO_INITIAL_STATE } from '../reducers/photo-reducer';
import { AllStore, PhotoState, PhotoList, Pokemon } from '../types';

const photoRootSelector = (state: AllStore): PhotoState => state[PHOTO_REDUCER_NAME] || PHOTO_INITIAL_STATE;

export const photoListSelector = createSelector(
  [photoRootSelector],
  ({ list }): PhotoList => list
);

export const photoCountSelector = createSelector(
  [photoRootSelector],
  ({ count }): number => count
);

export const photoLimitSelector = createSelector(
  [photoRootSelector],
  ({ limit }): number => limit
);

export const photoOffsetSelector = createSelector(
  [photoRootSelector],
  ({ offset }): number => offset
);

export const photoIsLoadingSelector = createSelector(
  [photoRootSelector],
  ({ isLoading }): boolean => isLoading
);

export const photoPokemonSelector = createSelector(
  [photoRootSelector],
  ({ pokemon }): Pokemon => pokemon
);

export const photoPokemonIsLoadingSelector = createSelector(
  [photoRootSelector],
  ({ isPokemonLoading }): boolean => isPokemonLoading
);

export const photoHasPokemonSelector = createSelector(
  [photoRootSelector],
  ({ hasPokemon }): boolean => hasPokemon
);
