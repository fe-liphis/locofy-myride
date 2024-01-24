import { NavItem, NavListContainer } from "./styles";

function NavBar() {
  return (
    <NavListContainer>
      <li>
        <NavItem to="/">Home</NavItem>
      </li>
      <li>
        <NavItem to="/taxi">Getting a Taxi</NavItem>
      </li>
      <li>
        <NavItem to="/mobile-app">Mobile App</NavItem>
      </li>
      <li>
        <NavItem to="/contact-us">Contact Us</NavItem>
      </li>
    </NavListContainer>
  );
}

export default NavBar;
