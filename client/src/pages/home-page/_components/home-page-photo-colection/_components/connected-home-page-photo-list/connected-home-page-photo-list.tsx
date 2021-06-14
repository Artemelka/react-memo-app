import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fasterClassNames } from '../../../../../../utils';
import {
  AllStore,
  fetchPhotos,
  fetchPokePhoto,
  Params,
  photoIsLoadingSelector,
  photoLimitSelector,
  PhotoList,
  photoListSelector,
  photoOffsetSelector,
  ThunkAction,
} from '../../../../../../redux';
import { WindowLoader, Overlay } from '../../../../../../components';
import { HomePagePhotoItem } from '../home-page-photo-item';
import styles from './connected-home-page-photo-list.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-photo-list';

type MapStateToProps = {
  isLoading: boolean;
  limit: number;
  offset: number;
  photos: PhotoList;
}

type MapDispatchToProps = {
  fetchPhotos: ThunkAction<Params>;
  fetchPokePhoto: ThunkAction<string>;
};

type HomePagePhotoListProps = MapStateToProps & MapDispatchToProps;

export class HomePagePhotoList extends Component<HomePagePhotoListProps> {
  componentDidMount() {
    const { limit, offset, fetchPhotos } = this.props;

    fetchPhotos({ limit, offset });
  }

  handlePhotoClick = (url: string) => {
    this.props.fetchPokePhoto(url);
  };

  render() {
    return (
      <ul className={cn(CLASS_NAME)}>
        {this.props.photos.map(photo => (
          <li key={photo.url} className={cn(`${CLASS_NAME}__item`)}>
            <HomePagePhotoItem
              name={photo.name}
              onClick={this.handlePhotoClick}
              url={photo.url}
            />
          </li>
        ))}
        {this.props.isLoading && <Overlay inContainer><WindowLoader themeColor="primary"/></Overlay>}
      </ul>
    );
  }
}

const mapStateToProps = (state: AllStore):MapStateToProps => ({
  isLoading: photoIsLoadingSelector(state),
  limit: photoLimitSelector(state),
  offset: photoOffsetSelector(state),
  photos: photoListSelector(state),
});

const mapDispatchToProps: MapDispatchToProps = {
  fetchPhotos,
  fetchPokePhoto,
};

// @ts-ignore
export const ConnectedHomePagePhotoList = connect(mapStateToProps, mapDispatchToProps)(HomePagePhotoList);