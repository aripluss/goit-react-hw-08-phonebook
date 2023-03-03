import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/user/selectors';

import { LinkAsButtonStyled } from 'components/Button/Button.styled';
import { ContainerStyled } from 'components/Container/Container.styled';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ContainerStyled
      style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
    >
      <h1>Hello, it's your contact book!</h1>
      <p>
        Your most convenient app to organize all your contacts in one place.
        Add, delete, search for the right contact or make a call right from
        here! Good luck, friend!
      </p>
      <p>Oh, you're finally here, I've been waiting for you!</p>
      {isLoggedIn && (
        <>
          <p>Let's check your contacts!</p>
          <LinkAsButtonStyled to={'/contacts'}>Click Here</LinkAsButtonStyled>
        </>
      )}
      {!isLoggedIn && (
        <>
          <LinkAsButtonStyled to={'login'}>Sign In</LinkAsButtonStyled>
          <p>If you haven't registered yet, you can do it easily here!</p>
          <LinkAsButtonStyled to={'register'}>Sign Up</LinkAsButtonStyled>
        </>
      )}
    </ContainerStyled>
  );
}
