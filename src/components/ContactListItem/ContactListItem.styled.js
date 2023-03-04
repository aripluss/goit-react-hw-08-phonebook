import styled from 'styled-components';

export const StyledContact = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

export const StyledContactName = styled.p`
  font-size: 16px;
  word-break: break-word;
`;

export const StyledContactNumber = styled.span`
  display: block;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;
