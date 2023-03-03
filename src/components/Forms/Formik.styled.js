import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 30%;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputStyled = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: border-bottom 0.3s ease-in-out;
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--accent-color);
  }

  &::placeholder {
    font-size: 16px;
  }
`;

export const FormFormikStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 30%;
`;

export const InputFormikStyled = styled(Field)`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: border-bottom 0.3s ease-in-out;
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--accent-color);
  }

  &::placeholder {
    font-size: 16px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: var(--red-color);
`;
