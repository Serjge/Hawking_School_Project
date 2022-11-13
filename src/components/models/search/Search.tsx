import { ReactElement } from 'react';

import {
  SearchButton,
  SearchInput,
  SearchWrapper,
} from 'components/models/search/styled';

export const Search = (): ReactElement => {
  return (
    <SearchWrapper>
      <SearchInput placeholder="Поиск по статьям" />
      <SearchButton />
    </SearchWrapper>
  );
};
