import { NavItem, NavListContainer } from "./styles";

function NavBar() {
  return (
    <NavListContainer>
      <li>
        <NavItem to="/">Home</NavItem>
      </li>
      <li>
        <NavItem to="/taxi" onClick={(e) => e.preventDefault()}>
          Getting a Taxi
        </NavItem>
      </li>
      <li>
        <NavItem to="/mobile-app" onClick={(e) => e.preventDefault()}>
          Mobile App
        </NavItem>
      </li>
      <li>
        <NavItem to="/contact-us" onClick={(e) => e.preventDefault()}>
          Contact Us
        </NavItem>
      </li>
    </NavListContainer>
  );
}

export default NavBar;
