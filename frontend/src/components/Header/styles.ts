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

export const NavItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.fonts.palette.primary};
  font-weight: ${(props) => props.theme.fonts.weight.xs};
`;

export const MenuButtonsContainer = styled.menu`
  display: flex;
  gap: 40px;
`;
