import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from 'components/models/header/Header';

export const DefaultLayout: FC = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};
