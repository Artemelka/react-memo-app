import { createSelector } from 'reselect';
import { ROOT_REDUCER_NAME, ROOT_INITIAL_STATE } from '../reducers/app-reducer';
import { AllStore, RootStore, PanelItem } from '../types';

const MIN_COUNTER_VALUE = 0;
const MAX_COUNTER_VALUE = 100;

const rootSelector = (state: AllStore): RootStore => state[ROOT_REDUCER_NAME] || ROOT_INITIAL_STATE;

export const rootCounterSelector = createSelector(
  [rootSelector],
  ({ counter }): number => counter
);

export const rootIsAppLoadingSelector = createSelector(
  [rootSelector],
  ({ isAppLoading }): boolean => isAppLoading
);

export const rootIsDisabledIncrementSelector = createSelector(
  [rootSelector],
  ({ counter }): boolean => counter === MAX_COUNTER_VALUE
);

export const rootIsDisabledDecrementSelector = createSelector(
  [rootSelector],
  ({ counter }): boolean => counter === MIN_COUNTER_VALUE
);

export const rootActivePanelIdSelector = createSelector(
  [rootSelector],
  ({ activePanelId }): string => activePanelId
);

export const rootPanelCollectionSelector = createSelector(
  [rootSelector],
  ({ panelCollection }): Array<PanelItem> => panelCollection
);