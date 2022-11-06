import React, { ReactElement } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from 'components/models';
import { AppRoutes } from 'enum/AppRoutes';
import { Main, News, Contacts, Map, Page404, Tariffs } from 'pages';

export const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.index} element={<DefaultLayout />}>
          <Route path={AppRoutes.index} element={<Main />} />
          <Route path={AppRoutes.news} element={<News />} />
          <Route path={AppRoutes.contacts} element={<Contacts />} />
          <Route path={AppRoutes.map} element={<Map />} />
          <Route path={AppRoutes.tariffs} element={<Tariffs />} />
          <Route path={'/*'} element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
