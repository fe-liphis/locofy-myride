import Logo from "../UI/Logo/Logo";
import {
  FooterArticleContainer,
  FooterContainer,
  FooterItemList,
  FooterList,
  FooterListTitle,
  FooterSocialsContainer,
  FooterSubtitle,
} from "./styles";

import face_logo from "../../assets/Facebook.svg";
import instagram_logo from "../../assets/instagram_logo.svg";
import twitter_logo from "../../assets/twitter_logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <FooterArticleContainer>
        <Link to={"/"} aria-label="Redirect to home">
          <Logo color="#FFFFFF" height="60.13" width="125.63" />
        </Link>
        <FooterSubtitle>
          MyRide Inc., 2nd Floor, New York, NY 10016
        </FooterSubtitle>
        <FooterSocialsContainer>
          <li>
            <img src={face_logo} alt="Facebook Logo" />
          </li>
          <li>
            <img src={instagram_logo} alt="Instagram Logo" />
          </li>
          <li>
            <img src={twitter_logo} alt="Twitter Logo" />
          </li>
        </FooterSocialsContainer>
      </FooterArticleContainer>
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
