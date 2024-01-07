import logo from "../assets/recepie-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import IconBtn from "./shared/IconBtn";
import FooterTitle from "./shared/FooterTitle";
import FooterLink from "./shared/FooterLink";
function Footer() {
  return (
    <section className="section-footer">
      <footer>
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            consectetur. Tempore pariatur nulla debitis consequatur! Doloremque
            veniam.
          </p>
          <div className="contact-icon">
            <IconBtn Icon={FaFacebook}></IconBtn>
            <IconBtn Icon={FaTwitter}></IconBtn>
            <IconBtn Icon={FaLinkedin}></IconBtn>
            <IconBtn Icon={FaInstagramSquare}></IconBtn>
          </div>
        </div>
        <div>
          <FooterTitle title={"Opening Restraunt"}></FooterTitle>
          <FooterLink link={"Sat-Wed:  9:00AM - 9:00 PM"}></FooterLink>
          <FooterLink link={"Thursday:  10:00AM - 10:00 PM"}></FooterLink>
          <FooterLink link={"Friday:   11:00AM - 7:00 PM"}></FooterLink>
        </div>
        <div>
          <FooterTitle title={"User Link"}></FooterTitle>
          <FooterLink link={"About Us"}></FooterLink>
          <FooterLink link={"Contact Us"}></FooterLink>
          <FooterLink link={"Order Delivery"}></FooterLink>
          <FooterLink link={"Payment and Tax"}></FooterLink>
          <FooterLink link={"Terms of Service"}></FooterLink>
        </div>
        <div>
          <FooterTitle title={"Contact Us"}></FooterTitle>
          <FooterLink link={"1234 Country Club Ave"}></FooterLink>
          <FooterLink link={"Washington, D.C, USA"}></FooterLink>
          <FooterLink link={"+09876543218"}></FooterLink>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
