"use client";
import Link from "next/link";
import Image from "next/image";
import NewsBrand from "../../public/images/binar-logo.png";

const Navbar = () => {
  function redirectToHome() {
    window.location.href = "/";
  }

  return (
    <nav>
      <div className="navbar-brand">
        <Link href="/" onClick={redirectToHome}>
          <Image src={NewsBrand} width={50} height={50} alt="news logo" />
        </Link>
        <h1 onClick={redirectToHome}>Binar News</h1>
      </div>
      <ul>
        <Link href="/" onClick={redirectToHome}>
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
