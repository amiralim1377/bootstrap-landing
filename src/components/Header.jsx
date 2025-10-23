import Image from "next/image";
import Link from "next/link";

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
    <header className=" hidden  sticky z-40 top-0 w-full  md:flex items-center justify-center h-24 bg-[#282828]">
      <div className="absolute right-60 top-12">
        <Image
          className="object-cover"
          src={"/logo-fr.png"}
          width={150}
          height={150}
          alt="logo"
        />
      </div>
      <ul className="flex gap-3    text-[#AFB2B4] text-base/[20px]   text-nowrap divide-x divide-gray-300 ">
        {navLinks.map((nav, i) => (
          <li key={i} className="px-4">
            <Link href={nav.href}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
