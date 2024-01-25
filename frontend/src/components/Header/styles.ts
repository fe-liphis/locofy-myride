import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const NavListContainer = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 30px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.fonts.palette.primary};
  font-weight: ${(props) => props.theme.fonts.weight.xs};
  height: 100%;

  &.active {
    color: ${(props) => props.theme.fonts.palette.secondary};
  }
`;

export const MenuButtonsContainer = styled.menu`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SeparatorMenu = styled.div`
  width: 1px;
  height: 30px;
  background-color: ${(props) => props.theme.background.palette.tertiary};
`;
