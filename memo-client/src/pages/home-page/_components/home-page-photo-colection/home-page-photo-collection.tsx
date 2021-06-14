import React, { memo } from 'react';
import { fasterClassNames } from '../../../../utils';
import { Text } from '../../../../components';
import { ConnectedHomePagePhotoList } from './_components/connected-home-page-photo-list';
import { ConnectedHomePagePagination } from './_components/connected-home-page-pagination';
import styles from './home-page-photo-collection.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-photo-collection';

export const HomePagePhotoCollection = memo(() => {
  return (
    <div className={cn(CLASS_NAME)}>
      <Text tagName="h3" align="center" fontWeight="bold">PokeApi</Text>
      <div className={cn(`${CLASS_NAME}__list`)}>
        <ConnectedHomePagePhotoList/>
      </div>
      <div className={cn(`${CLASS_NAME}__pagination`)}>
        <ConnectedHomePagePagination/>
      </div>
    </div>
  );
});