import React, { memo } from 'react';
import { connect } from 'react-redux';
import { rootCounterSelector, AllStore } from '../../../../redux';
import { Text } from '../../../../components';

type MapStateToProps = {
  counter: number;
};

type ConnectedHomePageCounterProps = MapStateToProps & {};

export const HomePageCounter = memo(({ counter }: ConnectedHomePageCounterProps) => (
  <Text fontWeight="semi-bold">Counter: {counter}</Text>
));

const mapStateToProps = (state: AllStore): MapStateToProps => ({
  counter: rootCounterSelector(state),
});

export const ConnectedHomePageCounter = connect(mapStateToProps)(HomePageCounter);