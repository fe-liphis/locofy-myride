import Logo from "../UI/Logo/Logo";
import {
  FooterContainer,
  FooterItemList,
  FooterList,
  FooterListTitle,
  FooterSubtitle,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <article>
        <Logo color="#FFFFFF" height="60.13" width="125.63" />
        <FooterSubtitle>
          MyRide Inc., 2nd Floor, New York, NY 10016
        </FooterSubtitle>
        <FooterList>
          <li>
            <FooterItemList>Face</FooterItemList>
          </li>
          <li>
            <FooterItemList>Insta</FooterItemList>
          </li>
          <li>
            <FooterItemList>Twitter</FooterItemList>
          </li>
        </FooterList>
      </article>
      <section>
        <FooterListTitle>Company</FooterListTitle>
        <FooterList>
          <li>
            <FooterItemList>About Us</FooterItemList>
          </li>
          <li>
            <FooterItemList>News</FooterItemList>
          </li>
          <li>
            <FooterItemList>Careers</FooterItemList>
          </li>
          <li>
            <FooterItemList>How we work</FooterItemList>
          </li>
        </FooterList>
      </section>
      <section>
        <FooterListTitle>Support</FooterListTitle>
        <FooterList>
          <li>
            <FooterItemList>FAQ</FooterItemList>
          </li>
          <li>
            <FooterItemList>US Office</FooterItemList>
          </li>
          <li>
            <FooterItemList>Asia Office</FooterItemList>
          </li>
          <li>
            <FooterItemList>Help Center</FooterItemList>
          </li>
        </FooterList>
      </section>
      <section>
        <FooterListTitle>More</FooterListTitle>
        <FooterList>
          <li>
            <FooterItemList>Become a partner</FooterItemList>
          </li>
          <li>
            <FooterItemList>Partner Support</FooterItemList>
          </li>
          <li>
            <FooterItemList>Mobile app links</FooterItemList>
          </li>
        </FooterList>
      </section>
    </FooterContainer>
  );
}

export default Footer;
