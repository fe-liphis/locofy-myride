import Logo from "../UI/Logo/Logo";

function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Getting a Taxi</a>
          </li>
          <li>
            <a href="">Mobile App</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
      <menu>
        <button>Notificacao</button>
        <button>Pessoa</button>
      </menu>
    </header>
  );
}

export default Header;
