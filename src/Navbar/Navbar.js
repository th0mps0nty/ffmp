import React from 'react';
import styled from 'styled-components';
import { mainRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
  background-color: ${mainRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px black;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

export function Navbar({ login, logout, loggedIn }) {
  return (
    <NavbarStyled>
      <Logo>FitFam Meal Prep</Logo>
      <UserStatus>
        {loggedIn !== 'loading' ? (
          <>
            👤 {loggedIn ? `Hello ${loggedIn.displayName}` : ''}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in / Sign up </LoginButton>
            )}
          </>
        ) : (
          'loading...'
        )}
      </UserStatus>
    </NavbarStyled>
  );
}
