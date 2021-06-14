import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../../components';
import { fasterClassNames } from '../../../../utils';
import {
  incrementAction,
  decrementAction,
  DispatchBaseAction,
  rootIsDisabledIncrementSelector,
  rootIsDisabledDecrementSelector,
  AllStore
} from '../../../../redux';
import style from './connected-home-page-buttons.module.scss';

const cn = fasterClassNames(style);
const CLASS_NAME = 'Home-page-buttons';

type MapStateToProps = {
  idDisableIncrement: boolean;
  isDisableDecrement: boolean;
}

type MapDispatchToProps = {
  decrement: DispatchBaseAction;
  increment: DispatchBaseAction;
}
type ConnectedPageButtonsProps = MapStateToProps & MapDispatchToProps & {};

export const HomePageButtons = ({
  decrement,
  increment,
  isDisableDecrement,
  idDisableIncrement,
}: ConnectedPageButtonsProps) => {
  const [isStart, setIsStart] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout>();

  const handleIncrementClick = () => increment();

  const handleDecrementClick = () => decrement();

  const handleStartAutoIncrement = () => {
    setIsStart(true);
    increment();

    timeoutId.current = setInterval(() => { increment(); }, 2000);
  };

  const handleStopAutoIncrement = () => {
    setIsStart(false);

    if (timeoutId?.current) {
      clearInterval(timeoutId.current);
    }
  };

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <Button
          onClick={handleIncrementClick}
          size="small"
          themeColor="success"
          value="increment"
          disabled={idDisableIncrement || isStart}
        />
      </div>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <Button
          onClick={handleDecrementClick}
          size="small"
          themeColor="error"
          value="decrement"
          disabled={isDisableDecrement || isStart}
        />
      </div>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <Button
          onClick={ isStart ? handleStopAutoIncrement : handleStartAutoIncrement}
          size="small"
          themeColor="primary"
          value={`${isStart ? 'stop' : 'start'} auto increment`  }
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: AllStore): MapStateToProps => ({
  isDisableDecrement: rootIsDisabledDecrementSelector(state),
  idDisableIncrement: rootIsDisabledIncrementSelector(state),
});

const mapDispatchToProps: MapDispatchToProps = {
  decrement: decrementAction,
  increment: incrementAction,
};

export const ConnectedHomePageButtons = connect(mapStateToProps, mapDispatchToProps)(HomePageButtons);