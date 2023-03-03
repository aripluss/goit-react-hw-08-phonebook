import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }

  & .main-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 70px 0;
    grid-template-areas:
      'form-container'
      'sub-container';

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr;
      gap: 0 70px;
      grid-template-areas: 'form-container sub-container';
    }
  }

  .form-container {
    grid-area: form-container;
  }

  .sub-container {
    grid-area: sub-container;
  }
`;
