import NavBar from "./NavBar";
import { HeaderContainer } from "./styles";
import MenuButtons from "./MenuButtons";
import Logo from "../UI/Logo/Logo";

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <NavBar />
      <MenuButtons />
    </HeaderContainer>
  );
}

export default Header;
