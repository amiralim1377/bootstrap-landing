import Image from "next/image";

export default function MobileHeader() {
  return (
    <header
      className="d-flex d-md-none sticky-top align-items-center justify-content-between w-100 px-3"
      style={{ height: "5rem", backgroundColor: "var(--golestan-dark-bg)" }}
    >
      {/* منوی همبرگری */}
      <button className="text-white fs-4 bg-transparent border-0 p-0">☰</button>

      {/* عنوان یا لوگو */}
      <Image src={"/logo-fr (2).svg"} width={100} height={100} alt="logo" />

      {/* آیکون سبد خرید */}
      <button className="text-white fs-4 bg-transparent border-0 p-0">🛒</button>
    </header>
  );
}
