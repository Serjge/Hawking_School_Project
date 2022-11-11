import { FC } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { BreadCrumbs } from 'components/models/breadCrumbs/BreadCrumbs';
import { Header } from 'components/models/header/Header';

export const DefaultLayout: FC = () => {
  const location = useLocation();
  const path = location.pathname.split('/').filter(item => item !== '');

  return (
    <>
      <Header />
      <BreadCrumbs path={path} />
      <Outlet />
    </>
  );
};
