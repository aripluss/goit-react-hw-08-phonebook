import { ContainerStyled } from 'components/Container/Container.styled';
import { LinkAsButtonStyled } from 'components/Button/Button.styled';

export default function PageNotFound() {
  return (
    <ContainerStyled
      style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
    >
      <p style={{ fontSize: '30px' }}>404 Page Not Found</p>
      <LinkAsButtonStyled to={'/'}>GO HOME</LinkAsButtonStyled>
    </ContainerStyled>
  );
}
