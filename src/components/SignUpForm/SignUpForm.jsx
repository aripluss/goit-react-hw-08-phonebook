import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useSelector } from 'react-redux';

import { selectStatus } from 'redux/user/selectors';
import { Loader } from 'components/Loader/Loader';

import { ButtonStyled } from 'components/Button/Button.styled';
import {
  ErrorMessageStyled,
  FormFormikStyled,
  InputFormikStyled,
  LabelStyled,
} from 'components/Forms/Formik.styled';

export const SignUpForm = ({ onSubmit = () => {}, isSignInForm = false }) => {
  const status = useSelector(selectStatus);

  ///// without Formik /////

  // const nameInputRef = useRef();
  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();

  // const handleSubmit = event => {
  // event.preventDefault();
  // const formData = {
  // ...(!isSignInForm && { name: nameInputRef.current.value }),
  // email: emailInputRef.current.value,
  // password: passwordInputRef.current.value,
  // };
  // onSubmit(formData);
  // event.target.reset();
  // };

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;
    console.log('values', values);

    const formData = {
      ...(!isSignInForm && { name }),
      email,
      password,
    };
    console.log('formData', formData);
    onSubmit(formData);

    actions.resetForm();
  };

  let validationSchema = object({
    name: string().min(2, 'Must be at least 2 characters long'),
    email: string()
      .required('Required')
      .email('Must be a valid email')
      .min(2, 'Must be at least 2 characters long'),
    password: string()
      .required('Required')
      .min(6, 'Must be at least 6 characters long')
      .max(20, 'Must be 20 characters maximum'),
  });

  return (
    <div>
      <h2 style={{ marginBottom: '40px' }}>
        {isSignInForm ? 'Sign in' : 'Sign up'}
      </h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormFormikStyled>
          {isSignInForm ? null : (
            <>
              <LabelStyled htmlFor="name">Name:</LabelStyled>
              <InputFormikStyled id="name" type="name" name="name" />
              <ErrorMessageStyled name="name" component="div" />
            </>
          )}
          <LabelStyled htmlFor="email">Email:</LabelStyled>
          <InputFormikStyled id="email" type="email" name="email" />
          <ErrorMessageStyled name="email" component="div" />
          <LabelStyled htmlFor="password">Password:</LabelStyled>
          <InputFormikStyled id="password" type="password" name="password" />
          <ErrorMessageStyled name="password" component="div" />
          <ButtonStyled type="submit" disabled={status === 'pending'}>
            {status === 'pending' && <Loader isButtonLoader />}
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </ButtonStyled>
        </FormFormikStyled>
      </Formik>
    </div>

    ///// without Formik /////

    // <>
    //   <h2 style={{ marginBottom: '40px' }}>
    //     {isSignInForm ? 'Sign in' : 'Sign up'}
    //   </h2>
    //   <FormStyled onSubmit={handleSubmit}>
    //     {isSignInForm ? null : (
    //       <>
    //         <LabelStyled htmlFor="name">Name:</LabelStyled>
    //         <InputStyled id="name" type="name" name="name" ref={nameInputRef} />
    //       </>
    //     )}

    //     <LabelStyled htmlFor="email">Email:</LabelStyled>
    //     <InputStyled id="email" type="email" name="email" ref={emailInputRef} />

    //     <LabelStyled htmlFor="password">Password:</LabelStyled>
    //     <InputStyled
    //       id="password"
    //       type="password"
    //       name="password"
    //       ref={passwordInputRef}
    //     />

    //     <ButtonStyled type="submit" disabled={status === 'pending'}>
    //       {status === 'pending' && <Loader isButtonLoader />}
    //       {isSignInForm ? 'Sign in' : 'Sign up'}
    //     </ButtonStyled>
    //   </FormStyled>
    // </>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSignInForm: PropTypes.bool,
};
