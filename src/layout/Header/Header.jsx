import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/user/selectors';

import { UserMenu } from 'components/UserMenu/UserMenu';

import {
  ContainerHeaderStyled,
  HeaderStyled,
  LogoStyled,
  NavLinkStyled,
} from './Header.styled';

export function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled>
      <ContainerHeaderStyled>
        <Link to="/">
          <LogoStyled>PHONEBOOK</LogoStyled>
        </Link>
        <nav className="header-nav">
          {isLoggedIn ? (
            <>
              <NavLinkStyled to={'/'} className="home">
                HOME
              </NavLinkStyled>
              <NavLinkStyled to={'contacts'} className="contacts">
                CONTACTS
              </NavLinkStyled>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLinkStyled to={'login'}>SIGN IN</NavLinkStyled>
              <NavLinkStyled to={'register'}>SIGN UP</NavLinkStyled>
            </>
          )}
        </nav>
      </ContainerHeaderStyled>
    </HeaderStyled>
  );
}
