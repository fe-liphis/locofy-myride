import NavBar from "./NavBar";
import { HeaderContainer } from "./styles";
import MenuButtons from "./MenuButtons";
import Logo from "../UI/Logo/Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <NavBar />
      <MenuButtons />
    </HeaderContainer>
  );
}

export default Header;
