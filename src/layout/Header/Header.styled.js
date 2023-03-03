import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ContainerStyled } from 'components/Container/Container.styled';

export const HeaderStyled = styled.header`
  min-height: 75px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 3px rgb(0 0 0 / 25%);

  & .header-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const ContainerHeaderStyled = styled(ContainerStyled)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  min-height: inherit;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoStyled = styled.div`
  color: var(--accent-color);
  font-size: 36px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
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
