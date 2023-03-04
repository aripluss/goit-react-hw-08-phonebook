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
    <UserMenuStyled className="user-menu">
      <span
        style={{ fontWeight: '700', fontSize: '20px', textAlign: 'center' }}
      >
        Hi, {user.name}!
      </span>
      <ButtonCancelStyled type="button" onClick={handleLogOut}>
        LOGOUT
      </ButtonCancelStyled>
    </UserMenuStyled>
  );
};
