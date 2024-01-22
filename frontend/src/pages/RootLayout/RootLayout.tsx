import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GlobalStyle from "../../styles/GlobalStyle";
import ResetCSS from "../../styles/ResetCSS";

function RootLayout() {
  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
