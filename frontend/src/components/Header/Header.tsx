import Logo from "../UI/Logo/Logo";
import NavBar from "./NavBar";
import { HeaderContainer } from "./styles";
import MenuButtons from "./MenuButtons";

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
