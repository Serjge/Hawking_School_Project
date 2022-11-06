import { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import {
  ButtonHeader,
  HeaderStyled,
  HeaderWrapper,
  Heart,
  Mark,
  Nav,
  NavItem,
} from './style';

import logo from 'assets/icons/logo.png';
import { Button } from 'components/ui/button/Button';
import { AppRoutes } from 'enum/AppRoutes';

type MenuType = {
  id: string;
  link: string;
  name: string;
};

const MENU: MenuType[] = [
  { id: '1', link: AppRoutes.index, name: 'Главная' },
  { id: '2', link: AppRoutes.news, name: 'Новости' },
  { id: '3', link: AppRoutes.tariffs, name: 'Размещение и тарифы' },
  { id: '4', link: AppRoutes.map, name: `Объявления на карте` },
  { id: '5', link: AppRoutes.contacts, name: 'Контакты' },
];

const MENU2: MenuType[] = [
  { id: '1', link: AppRoutes.apartment, name: 'Квартиры на сутки' },
  { id: '2', link: AppRoutes.cottages, name: 'Коттеджи и усадьбы' },
  { id: '3', link: AppRoutes.bath, name: 'Бани и Сауны' },
  { id: '4', link: AppRoutes.auto, name: `Авто напрокат` },
];

export const Header = (): ReactElement => (
  <header>
    <HeaderStyled type="top">
      <HeaderWrapper>
        <Nav>
          {MENU.map(({ id, name, link }) => (
            <NavLink key={id} to={link}>
              {({ isActive }) => (
                <NavItem type="top" isActive={isActive}>
                  {id === '4' && <Mark colorMark="grey" isActive={isActive} />}
                  {name}
                </NavItem>
              )}
            </NavLink>
          ))}
        </Nav>
        <div>
          <ButtonHeader colorButton="grey">
            Закладки <Heart />
          </ButtonHeader>
          <ButtonHeader colorButton="violet">Вход и регистрация</ButtonHeader>
        </div>
      </HeaderWrapper>
    </HeaderStyled>
    <HeaderStyled type="bottom">
      <HeaderWrapper>
        <img src={logo} alt="logo" />
        {MENU2.map(({ id, name, link }) => (
          <NavLink key={id} to={link}>
            {({ isActive }) => (
              <NavItem type="bottom" isActive={isActive}>
                {name}
                {id === '1' && <Mark colorMark="yellow" isActive={isActive} />}
              </NavItem>
            )}
          </NavLink>
        ))}
        <Button>+ Разместить объявление</Button>
      </HeaderWrapper>
    </HeaderStyled>
  </header>
);
