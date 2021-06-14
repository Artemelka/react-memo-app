import React from 'react';
import { connect } from 'react-redux';
import { fasterClassNames } from '../../../../../../utils';
import { lastNewsSelector, AllStore } from '../../../../../../redux';
import { Text } from '../../../../../../components';
import { News } from '../../../../../../services';
import styles from './connected-home-page-last-news.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'home-page-last-news';

type MapStateToProps = {
  news: News;
};
type HomePageLastNewsProps = MapStateToProps & {};

export const HomePageLastNews = ({ news }: HomePageLastNewsProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <Text tagName="h4">{news.title}</Text>
      <div className={cn(`${CLASS_NAME}__description`)}>
        <Text tagName="p">{news.description}</Text>
      </div>
      <Text tagName="p" align="right">{news.time}</Text>
    </div>
  );
};

const mapStateToProps = (state: AllStore): MapStateToProps => ({
  news: lastNewsSelector(state),
});

export const ConnectedHomePageLastNews = connect(mapStateToProps)(HomePageLastNews);