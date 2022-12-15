import { Outlet } from 'react-router-dom';
import css from '../css/phonebook.module.css';
import { Suspense } from 'react';
import { StyledLink } from './Layout.styled';
import { useSelector } from 'react-redux';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = () => {
  const loggIn = useSelector(state => state.user.isLoggedIn);
  return (
    <>
      <header className={css.header}>
        <ul className={css.nav__list}>
          <li>
            <StyledLink className={css.nav__list} to="/">
              <p>Home</p>
            </StyledLink>
          </li>
          {loggIn && (
            <li>
              <StyledLink to="/contacts">
                <p>Contacts</p>
              </StyledLink>
            </li>
          )}
        </ul>

        {loggIn ? <UserMenu /> : <AuthMenu />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
