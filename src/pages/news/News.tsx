import { ReactElement } from 'react';

import { NewsCard } from 'components/models/news-card/NewsCard';
import { Search } from 'components/models/search/Search';
import { NEWS_MOCK } from 'mock/news';
import { ContainerNews, WrapperListNews, WrapperNews } from 'pages/news/style';
import { Title } from 'styles/styles';

export const News = (): ReactElement => {
  return (
    <WrapperNews>
      <ContainerNews>
        <Title>Новости</Title>
        <Search />
      </ContainerNews>
      <WrapperListNews>
        {NEWS_MOCK.map(({ id, image, date, title, content, description }) => (
          <NewsCard
            key={id}
            title={title}
            id={id}
            date={date}
            image={image}
            content={content}
            description={description}
          />
        ))}
      </WrapperListNews>
    </WrapperNews>
  );
};
