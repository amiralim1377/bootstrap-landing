import Image from "next/image";
import Link from "next/link";
import image from "../../public/logo-fr.png";

const Header = () => {
  const navLinks = [
    { name: "صفحه اصلی", href: "/" },
    { name: "شرکت گلستان", href: "/about" },
    { name: "محصولات", href: "/golestan-products" },
    { name: "وبلاگ", href: "/blog" },
    { name: "قرعه کشی", href: "/raffle" },
    { name: "استخدام", href: "/careers" },
    { name: "تماس با ما", href: "/contact" },
    { name: "EN", href: "/products" },
  ];

  return (
    <header
      className="d-none d-md-flex sticky-top w-100 align-items-center justify-content-center"
      style={{ backgroundColor: "var(--golestan-dark-bg)", height: "6rem" }}
    >
      <div
        className="position-absolute"
        style={{ right: "15rem", top: "3rem" }}
      >
        <Image
          src={image}
          width={150}
          height={90}
          className="object-fit-cover"
          alt="logo"
        />
      </div>

      <ul className="d-flex gap-3 header-nav list-unstyled mb-0 ">
        {navLinks.map((nav, i) => (
          <li key={i}>
            <Link
              href={nav.href}
              className="text-decoration-none "
              style={{
                color: "var(--golestan-gray-300)",
              }}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
