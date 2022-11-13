import { ReactElement } from 'react';

import {
  ImageNewsCard,
  ContentNewsCard,
  DescriptionNewsCard,
  WrapperNewsCard,
  TitleNewsCard,
  DateNewsCard,
  ButtonNewsCard,
} from './style';

import { Flex } from 'styles';
import { NewsItem } from 'types/News';

export const NewsCard = (props: NewsItem): ReactElement => {
  const { id, date, title, image, content } = props;

  return (
    <WrapperNewsCard>
      <ImageNewsCard src={image} alt="news" />
      <DescriptionNewsCard>
        <TitleNewsCard>{title}</TitleNewsCard>
        <ContentNewsCard>{content}</ContentNewsCard>
        <Flex mt="45px" flexDirection="row" justifyContent="space-between">
          <DateNewsCard>
            {date
              .toLocaleDateString('ru-RU', {
                dateStyle: 'long',
              })
              .replace(/\s*г\./, '')}
          </DateNewsCard>
          <ButtonNewsCard to={id}>Читать</ButtonNewsCard>
        </Flex>
      </DescriptionNewsCard>
    </WrapperNewsCard>
  );
};
