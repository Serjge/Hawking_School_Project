import { ReactElement } from 'react';

import { BreadCrumbsWrapper, CurrentPage, CustomLink, HomeIcon } from './style';

const PATH_NAME: { [key: string]: string } = {
  news: 'Новости',
  tariffs: 'Тарифы',
  contacts: 'Контакты',
  map: 'Объявления на карте',
};

type BreadCrumbsProps = {
  path: string[];
};

export const BreadCrumbs = (props: BreadCrumbsProps): ReactElement => {
  const { path } = props;

  return (
    <BreadCrumbsWrapper>
      <HomeIcon />
      {path.map((item, index) => {
        if (index + 1 === path.length) {
          return (
            <CurrentPage index={index} key={item}>
              {PATH_NAME[item] || item}
            </CurrentPage>
          );
        }

        return (
          <CustomLink key={item} index={index} to={item}>
            {PATH_NAME[item] || item}
          </CustomLink>
        );
      })}
    </BreadCrumbsWrapper>
  );
};
