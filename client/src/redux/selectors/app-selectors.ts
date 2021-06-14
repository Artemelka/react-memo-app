import { ROOT_REDUCER_NAME, ROOT_INITIAL_STATE } from '../reducers/app-reducer';
import { AllStore, PanelItem } from '../types';

const MIN_COUNTER_VALUE = 0;
const MAX_COUNTER_VALUE = 100;

export const rootCounterSelector = ({
  [ROOT_REDUCER_NAME]: { counter } = ROOT_INITIAL_STATE
}: AllStore): number => counter;

export const rootIsAppLoadingSelector = ({
  [ROOT_REDUCER_NAME]: { isAppLoading } = ROOT_INITIAL_STATE
}: AllStore): boolean => isAppLoading;

export const rootIsDisabledIncrementSelector = ({
  [ROOT_REDUCER_NAME]: { counter } = ROOT_INITIAL_STATE
}: AllStore): boolean => counter === MAX_COUNTER_VALUE;

export const rootIsDisabledDecrementSelector = ({
  [ROOT_REDUCER_NAME]: { counter } = ROOT_INITIAL_STATE
}: AllStore): boolean => counter === MIN_COUNTER_VALUE;

export const rootActivePanelIdSelector = ({
  [ROOT_REDUCER_NAME]: { activePanelId } = ROOT_INITIAL_STATE
}: AllStore): string => activePanelId;

export const rootPanelCollectionSelector = ({
  [ROOT_REDUCER_NAME]: { panelCollection } = ROOT_INITIAL_STATE
}: AllStore): Array<PanelItem> => panelCollection;