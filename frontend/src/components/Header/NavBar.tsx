import { NavItem, NavListContainer } from "./styles";

function NavBar() {
  return (
    <nav>
      <NavListContainer>
        <li>
          <NavItem href="">Home</NavItem>
        </li>
        <li>
          <NavItem href="">Getting a Taxi</NavItem>
        </li>
        <li>
          <NavItem href="">Mobile App</NavItem>
        </li>
        <li>
          <NavItem href="">Contact Us</NavItem>
        </li>
      </NavListContainer>
    </nav>
  );
}

export default NavBar;
