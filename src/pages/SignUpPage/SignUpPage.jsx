import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';

import { selectAuthError, selectIsLoggedIn } from 'redux/user/selectors';
import { registerRequest } from 'redux/user/operations';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

import { ContainerStyled } from 'components/Container/Container.styled';

export default function SignUpPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const errorUser = useSelector(selectAuthError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (errorUser) toast.error('Oops... Try again.');
  }, [errorUser]);

  const handleRegister = ({ name, email, password }) => {
    dispatch(registerRequest({ name, email, password }));
  };

  return (
    <>
      <ContainerStyled>
        <SignUpForm onSubmit={handleRegister} />
      </ContainerStyled>

      <Toaster />
    </>
  );
}
