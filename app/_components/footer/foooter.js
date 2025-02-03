import FooterBottom from "./footer-bottom";
import FooterTop from "./footer-top";

function Footer() {
  return (
    <footer>
      <FooterTop />
      <div className='border-b border-border-deepBlue'></div>
      <FooterBottom />
    </footer>
  );
}

export default Footer;
