import styled from 'styled-components';
import { StyledFormButton } from '../ContactForm/ContactForm.styled';

export const StyledDeleteButton = styled(StyledFormButton)`
  max-width: 130px;
  height: auto;
  font-size: 16px;
  background: none;
  border: none;
  color: var(--red-color);
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--btn-hover-color);
  }
`;

export const StyledContactName = styled.p`
  word-break: break-word;
`;
export const StyledContactNumber = styled.span`
  display: block;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const StyledContact = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;
