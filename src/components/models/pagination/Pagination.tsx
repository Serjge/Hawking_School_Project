import { ReactElement } from 'react';

import { Dot, NumberPage, WrapperPagination } from 'components/models/pagination/style';
import { usePagination } from 'hooks';

type PaginationProps = {
  count: number;
  contentPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export const Pagination = (props: PaginationProps): ReactElement => {
  const { contentPerPage, setCurrentPage, currentPage, count } = props;
  const { totalPages, page, setPage, gaps } = usePagination(
    contentPerPage,
    count,
    currentPage,
  );
  const { after, before, paginationGroup } = gaps;

  const onPageClick = (numberPage: number): void => {
    setPage(numberPage);
    setCurrentPage(numberPage);
  };

  return (
    <WrapperPagination>
      <NumberPage
        isActive={page === 1}
        onClick={page !== 1 ? () => onPageClick(1) : undefined}
        role="presentation"
      >
        {1}
      </NumberPage>
      {before ? <Dot>...</Dot> : null}

      {paginationGroup.map(item => {
        return (
          <NumberPage
            isActive={page === item}
            key={item}
            onClick={page !== item ? () => onPageClick(item) : undefined}
            role="presentation"
          >
            {item}
          </NumberPage>
        );
      })}

      {after ? <Dot>...</Dot> : null}
      <NumberPage
        isActive={page === totalPages}
        onClick={page !== totalPages ? () => onPageClick(totalPages) : undefined}
        role="presentation"
      >
        {totalPages}
      </NumberPage>
    </WrapperPagination>
  );
};
