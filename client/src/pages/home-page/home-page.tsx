import React from 'react';
import { fakeNewsService } from '../../services';
import { fasterClassNames } from '../../utils';
import { Text } from '../../components';
import {
  ConnectedHomePageButtons,
  ConnectedHomePageCounter,
  ConnectedHomePagePanel,
  ConnectedHomePagePanelActions,
  ConnectedHomePagePokemon,
  HomePageNews,
  HomePagePhotoCollection,
} from './_components';
import styles from './home-page.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page';

export const HomePage = () => {
  return (
    <div className={cn(CLASS_NAME)}>
      <Text tagName="h1" fontWeight="bold" align="center">WITHOUT MEMO</Text>
      <section className={cn(`${CLASS_NAME}__section`)}>
        <div
          className={cn(`${CLASS_NAME}__section-item`, {
            [`${CLASS_NAME}__section-item--small`]: true
          })}
        >
          <ConnectedHomePagePanelActions/>
          <ConnectedHomePagePanel/>
        </div>
        <div
          className={cn(`${CLASS_NAME}__section-item`, {
            [`${CLASS_NAME}__section-item--large`]: true
          })}
        >
          <HomePageNews newsService={fakeNewsService}/>
        </div>
      </section>
      <div className={cn(`${CLASS_NAME}__actions`)}>
        <div className={cn(`${CLASS_NAME}__counter`)}>
          <ConnectedHomePageCounter/>
          <ConnectedHomePageButtons/>
        </div>
        <div className={cn(`${CLASS_NAME}__panel-actions`)}>

        </div>
      </div>
      <section className={cn(`${CLASS_NAME}__section`)}>
        <div className={cn(`${CLASS_NAME}__section-item`)}>
          <HomePagePhotoCollection/>
        </div>
        <div className={cn(`${CLASS_NAME}__section-item`)}>
          <ConnectedHomePagePokemon/>
        </div>
      </section>
      <section className={cn(`${CLASS_NAME}__section`)}>

      </section>
    </div>
  );
};