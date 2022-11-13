import { ReactElement } from 'react';

import { NumberPage, WrapperPagination } from 'components/models/pagination/style';
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
        // className={cn('button', { active: page === 1 })}
        // style={{ color: page === 1 ? 'red' : 'black' }}
        onClick={page !== 1 ? () => onPageClick(1) : undefined}
        role="presentation"
      >
        {1}
      </NumberPage>
      {before ? <NumberPage>...</NumberPage> : null}

      {paginationGroup.map(item => {
        return (
          <NumberPage
            isActive={page === item}
            key={item}
            // style={{ color: page === item ? 'red' : 'black' }}
            // className={cn('button', { active: page === item })}
            onClick={page !== item ? () => onPageClick(item) : undefined}
            role="presentation"
          >
            {item}
          </NumberPage>
        );
      })}

      {after ? <NumberPage>...</NumberPage> : null}
      <NumberPage
        isActive={page === totalPages}
        // style={{ color: page === totalPages ? 'red' : 'black' }}
        // className={cn('button', { active: page === totalPages })}
        onClick={page !== totalPages ? () => onPageClick(totalPages) : undefined}
        role="presentation"
      >
        {totalPages}
      </NumberPage>
    </WrapperPagination>
  );
};
