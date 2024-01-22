import Logo from "../UI/Logo/Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
      <menu>
        <button>Notificacao</button>
        <button>Pessoa</button>
      </menu>
    </header>
  );
}

export default Header;
