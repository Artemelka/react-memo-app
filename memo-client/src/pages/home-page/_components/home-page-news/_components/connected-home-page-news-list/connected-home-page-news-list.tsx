import React, { memo } from 'react';
import { connect } from 'react-redux';
import { fasterClassNames } from '../../../../../../utils';
import { newsSelector, AllStore } from '../../../../../../redux';
import { Text } from '../../../../../../components';
import { News } from '../../../../../../services';
import styles from './connected-home-page-news-list.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-news-list';

type MapStateToProps = {
  news: Array<News>;
}

type ConnectedHomePageNewsListProps = MapStateToProps & {};

export const HomePageNewsList = memo(({ news }: ConnectedHomePageNewsListProps) => {
  return (
    <ul className={cn(CLASS_NAME)}>
      {news.map(item => (
        <li key={item.id} className={cn(`${CLASS_NAME}__item`)}>
          <Text tagName="h5" fontWeight="medium">{item.title}</Text>
          <p className={cn(`${CLASS_NAME}__description`)}>{item.description}</p>
          <Text tagName="p" align="right">{item.time}</Text>
        </li>
      ))}
    </ul>
  );
});

const mapStateToProps = (state: AllStore): MapStateToProps => ({
  news: newsSelector(state),
});

export const ConnectedHomePageNewsList = connect(mapStateToProps)(HomePageNewsList);