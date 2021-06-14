import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../../../../components';
import {
  photoIsLoadingSelector,
  photoLimitSelector,
  photoOffsetSelector,
  photoCountSelector,
  setOffsetAction,
  setLimitAction,
  fetchPhotos,
  DispatchFullActions,
  ThunkAction,
  Params,
  AllStore,
} from '../../../../../../redux';
import { fasterClassNames } from '../../../../../../utils';
import styles from './connected-home-page-pagination.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-pagination';

type MapStateToProps = {
  count: number;
  isLoading: boolean;
  limit: number;
  offset: number;
};

type MapDispatchToProps = {
  fetchPhotos: ThunkAction<Params>;
  setLimit: DispatchFullActions<number>;
  setOffset: DispatchFullActions<number>;
}

type HomePagePaginationProps = MapStateToProps & MapDispatchToProps;

class HomePagePagination extends Component<HomePagePaginationProps> {
  fetchPhotos = (params: Params) => {
    this.props.fetchPhotos(params);
  }

  handlePrevClick = () => {
    const { limit, offset, setOffset } = this.props;
    const nextOffset = offset - limit;

    setOffset(nextOffset);
    this.fetchPhotos({ limit, offset: nextOffset });
  };

  handleNextClick = () => {
    const { limit, offset, setOffset } = this.props;
    const nextOffset = offset + limit;

    setOffset(nextOffset);
    this.fetchPhotos({ limit, offset: nextOffset });
  };

  render() {
    const { count, isLoading, limit, offset } = this.props;

    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <Button
            disabled={(offset === 0) || isLoading}
            onClick={this.handlePrevClick}
            size="small"
            themeColor="primary"
            value="prev"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <Button
            onClick={this.handleNextClick}
            size="small"
            themeColor="primary"
            value="next"
            disabled={(limit + offset > count) || isLoading}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AllStore): MapStateToProps => ({
  count: photoCountSelector(state),
  isLoading: photoIsLoadingSelector(state),
  limit: photoLimitSelector(state),
  offset: photoOffsetSelector(state),
});

const mapDispatchToProps: MapDispatchToProps = {
  fetchPhotos,
  setLimit: setLimitAction,
  setOffset: setOffsetAction,
};

// @ts-ignore
export const ConnectedHomePagePagination = connect(mapStateToProps, mapDispatchToProps)(HomePagePagination);