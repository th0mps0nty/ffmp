import React from 'react';
import styled from 'styled-components';
import { mainRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
  background-color: ${mainRed};
  padding: 10px;
  position: fixed;
  width: 100%;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px black;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>FitFam Meal Prep</Logo>
    </NavbarStyled>
  );
}
