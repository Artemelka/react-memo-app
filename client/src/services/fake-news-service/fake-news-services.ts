import { v4 as getId } from 'uuid';

const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

type NewsSubscribeCallback = (news: Array<News>) => void;

export type News = {
  id: string;
  title: string;
  description: string;
  time: string;
}

class FakeNewsService {
  private news: Array<News> = [];
  private TIMEOUT_INTERVAL = 1000;
  private intervalId?: NodeJS.Timeout;
  private counter = 0;
  private subscribers: Array<NewsSubscribeCallback> = [];

  private addNews = (news: News) => {
    this.news = [news, ...this.news];
  }

  private getNextNewsItem = () => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    this.counter++;

    return ({
      id: getId(),
      title: `News ${this.counter}`,
      description: DESCRIPTION,
      time,
    });
  }

  private callSubscribers = () => {
    this.subscribers.forEach(callback => {
      callback(this.news);
    })
  }

  public start = (): void => {
    this.intervalId = setInterval(() => {
      this.addNews(this.getNextNewsItem());
      this.callSubscribers();
    }, this.TIMEOUT_INTERVAL);
  }

  public stop = (): void => {
    if(this.intervalId) {
      clearInterval(this.intervalId);
      this.subscribers = [];
    }
  }

  public subscribe = (cb: NewsSubscribeCallback) => {
    this.subscribers.push(cb);
  }
}

export const fakeNewsService = new FakeNewsService();
