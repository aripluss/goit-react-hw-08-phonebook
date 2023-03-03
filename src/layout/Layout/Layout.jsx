import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';

import { SectionStyled } from 'components/Section/Section.styled';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <SectionStyled>
          <Outlet />
        </SectionStyled>
      </main>
    </div>
  );
}
