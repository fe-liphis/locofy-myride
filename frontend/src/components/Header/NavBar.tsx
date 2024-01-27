import { NavItem, NavListContainer } from "./styles";

function NavBar() {
  return (
    <nav>
      <NavListContainer>
        <li>
          <NavItem to="/">Home</NavItem>
        </li>
        <li>
          <NavItem to="/getting-taxi">Getting a Taxi</NavItem>
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
    </nav>
  );
}

export default NavBar;
