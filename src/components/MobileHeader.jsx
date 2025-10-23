import Image from "next/image";

export default function MobileHeader() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between w-full h-20 bg-[#282828] px-4 md:hidden">
      {/* منوی همبرگری */}
      <button className="text-white text-xl">☰</button>

      {/* عنوان یا لوگو */}
      <Image src={"/logo-fr (2).svg"} width={100} height={100} alt="logo" />

      {/* آیکون سبد خرید */}
      <button className="text-white text-xl">🛒</button>
    </header>
  );
}
