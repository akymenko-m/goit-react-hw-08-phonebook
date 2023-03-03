import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import {
  AlertStyled,
  LinkBoxStyled,
  Main,
  NavLogin,
  NavUserMenu,
} from './Navigation.styled';
import { Divider } from '@chakra-ui/react';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header>
        <nav>
          {isLoggedIn ? (
            <NavUserMenu>
              <LinkBoxStyled
                w="80px"
                borderRadius="md"
                bg="#86cfcf"
                color="white"
                px={4}
                h={8}
              >
                <NavLink to="/contacts">Contacts</NavLink>
              </LinkBoxStyled>

              <UserMenu />
            </NavUserMenu>
          ) : (
            <NavLogin>
              <LinkBoxStyled
                w="100px"
                borderRadius="md"
                bg="#86cfcf"
                color="white"
                px={4}
                h={8}
              >
                <NavLink to="/login">Log In</NavLink>
              </LinkBoxStyled>

              <LinkBoxStyled
                w="100px"
                borderRadius="md"
                bg="#86cfcf"
                color="white"
                px={4}
                h={8}
              >
                <NavLink to="/register">Sign Up</NavLink>
              </LinkBoxStyled>
            </NavLogin>
          )}
        </nav>
      </header>
      <Divider />

      <Main>
        {!isLoggedIn && (
          <AlertStyled status="success" variant="top-accent">
            To start using the app, please log in or sign up.
          </AlertStyled>
        )}

        <Outlet />
      </Main>
    </div>
  );
};
