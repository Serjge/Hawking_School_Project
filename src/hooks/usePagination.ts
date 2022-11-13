/* eslint-disable no-magic-numbers */
import { useState, useEffect } from 'react';

type Gaps = {
  before: boolean;
  paginationGroup: number[];
  after: boolean;
};

type UsePaginationReturn = {
  totalPages: number;
  setPage: (page: number) => void;
  page: number;
  gaps: Gaps;
};

export const usePagination = (
  contentPerPage: number,
  count: number,
  currentPage = 1,
): UsePaginationReturn => {
  const [page, setPage] = useState(currentPage);
  const [gaps, setGaps] = useState<Gaps>({
    before: false,
    paginationGroup: [],
    after: false,
  });
  const [pagesInBetween, setPagesInBetween] = useState<number[]>([]);

  const totalPages = Math.ceil(count / contentPerPage);

  // если больше 2 страниц заполнение масива цифрами кроме первой страницы и последней
  useEffect(() => {
    if (totalPages > 2) {
      const temp = new Array(totalPages - 2).fill(1).map((_, i) => i + 2);

      setPagesInBetween(temp);
    }
  }, [totalPages]);

  useEffect(() => {
    let paginationGroup = pagesInBetween;
    let before = false;
    let after = false;

    // выборка нужных страниц центрального масива если больше 7 елементов
    if (totalPages > 7) {
      if (page <= 5) {
        paginationGroup = pagesInBetween.slice(0, 6);
      }
      if (page >= totalPages - 4) {
        paginationGroup = pagesInBetween.slice(-6, totalPages);
      }
      if (page >= 6 && page <= totalPages - 5) {
        paginationGroup = pagesInBetween.slice(page - 4, page + 1);
      }
    }

    // нужны или нет точки до и после центра пагинации
    if (totalPages > 7) {
      if (paginationGroup[0] > 3) {
        before = true;
      }
      if (paginationGroup[0] < totalPages - 6) {
        after = true;
      }
    }

    setGaps({ paginationGroup, before, after });
  }, [page, pagesInBetween, totalPages]);

  return {
    totalPages,
    setPage,
    page,
    gaps,
  };
};
