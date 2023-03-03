import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/user/selectors';
import { logOutRequest } from 'redux/user/operations';

import { UserMenuStyled } from './UserMenu.styled';
import { ButtonCancelStyled } from 'components/Button/Button.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <UserMenuStyled>
      <span>Hello, {user.name}!</span>
      <ButtonCancelStyled type="button" onClick={handleLogOut}>
        Logout
      </ButtonCancelStyled>
    </UserMenuStyled>
  );
};
