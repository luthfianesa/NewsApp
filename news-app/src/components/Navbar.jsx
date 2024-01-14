import Link from "next/link";
import Image from "next/image";
import NewsBrand from "../../public/images/binar-logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-brand">
        <Link href="/">
          <Image src={NewsBrand} width={50} height={50} alt="news logo" />
        </Link>
        <h1>Binar News</h1>
      </div>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
