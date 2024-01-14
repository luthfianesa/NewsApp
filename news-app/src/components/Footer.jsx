import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "../../public/images/icon-facebook.png";
import YoutubeIcon from "../../public/images/icon-youtube.png";
import InstagramIcon from "../../public/images/icon-instagram.png";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Binar News. All rights reserved.</p>
      <div className="footer__separator">
        <div className="footer__navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer__social__separator">
          <h4>Connect With Us</h4>
          <div className="footer__social">
            <Link href="https://www.facebook.com" target="_blank">
              <Image src={FacebookIcon} width={20} height={20} alt="news logo" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <Image src={YoutubeIcon} width={20} height={20} alt="news logo" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <Image src={InstagramIcon} width={20} height={20} alt="news logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div class="footer">
        <p>&copy; 2024 Your News Organization. All rights reserved.</p>
        <div>
            <a href="#">Home</a>
            <a href="#">News Categories</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
        </div>
        <div>
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Twitter</a>
            <a href="#" target="_blank">Instagram</a>
        </div>
    </div> */
}
