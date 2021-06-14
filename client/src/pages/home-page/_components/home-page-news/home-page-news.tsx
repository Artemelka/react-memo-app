import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fasterClassNames } from '../../../../utils';
import { fakeNewsService, News } from '../../../../services';
import { setNews, DispatchFullActions } from '../../../../redux';
import { Text } from '../../../../components';
import { ConnectedHomePageNewsList } from './_components/connected-home-page-news-list';
import { ConnectedHomePageLastNews } from './_components/connected-home-page-last-news';
import styles from './home-page-news.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-news';

type MapDispatchToProps = {
  setNews: DispatchFullActions<Array<News>>;
}

type HomePageNewsProps = MapDispatchToProps & {
  newsService: typeof fakeNewsService;
};

export class HomePageNewsContainer extends Component<HomePageNewsProps> {
  componentDidMount() {
    this.props.newsService.subscribe(this.handleUpdateNews);
    this.props.newsService.start();
  }

  componentWillUnmount() {
    this.props.newsService.stop();
  }

  handleUpdateNews = (news: Array<News>) => {
    const nextNews = news.length > 100 ? news.slice(0, 100) : news;

    this.props.setNews(nextNews);
  }

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__list`)}>
          <div className={cn(`${CLASS_NAME}__title`)}>
            <Text upper fontWeight="semi-bold">fake</Text>
            <span className={cn(`${CLASS_NAME}__background`)}>
              <Text upper fontWeight="semi-bold">news</Text>
            </span>
          </div>
          <ConnectedHomePageNewsList/>
        </div>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <div className={cn(`${CLASS_NAME}__title`)}>
            <Text upper fontWeight="semi-bold">last</Text>
            <span className={cn(`${CLASS_NAME}__background`)}>
              <Text upper fontWeight="semi-bold">news</Text>
            </span>
          </div>
          <ConnectedHomePageLastNews/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps = {
  setNews,
}

export const HomePageNews = connect(null, mapDispatchToProps)(HomePageNewsContainer);