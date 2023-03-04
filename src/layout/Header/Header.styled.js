import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ContainerStyled } from 'components/Container/Container.styled';

export const HeaderStyled = styled.header`
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 3px rgb(0 0 0 / 25%);

  & .header-nav {
    font-weight: 700;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'user-menu user-menu'
      'home contacts';

    & .home {
      grid-area: home;
    }

    & .contacts {
      grid-area: contacts;
    }

    & .user-menu {
      grid-area: user-menu;
    }

    @media screen and (min-width: 768px) {
      display: grid;
      grid-auto-rows: 1fr;
      grid-template-areas: 'home contacts user-menu';
    }
  }
`;

export const ContainerHeaderStyled = styled(ContainerStyled)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0 30px;
  min-height: inherit;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoStyled = styled.div`
  color: var(--accent-color);
  font-size: 36px;
  font-weight: 900;
  padding-top: 10px;

  background: linear-gradient(
    90deg,
    #2d2d2d,
    #524a33,
    #556b2f,
    #212121,
    #821a1a,
    #2d2d2d
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textflow 10s linear infinite;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }

  @keyframes textflow {
    from {
      background-position: 0% center;
    }
    to {
      background-position: 200% center;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: border-bottom 0.3s ease, color 0.3s ease;

  &.active {
    color: var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
  }

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
