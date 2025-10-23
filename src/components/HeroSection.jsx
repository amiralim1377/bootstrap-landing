import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[#E9E9E9]  mx-auto  ">
      <section className="max-w-5xl flex  flex-row mx-auto items-center justify-between">
        <div className="max-w-md flex flex-col items-start gap-y-4">
          <h1 className="text-3xl text-red-600">
            قرعه‌کشی مصرف‌کنندگان گلستان
          </h1>
          <p className="text-xl text-gray-600">
            قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان
          </p>
          <p className="text-gray-500 leading-loose">
            هر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با
            ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای
            گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
            است.
          </p>
          <Link
            href="/"
            className="bg-white px-4 py-3 border border-gray-400 rounded-xl hover:bg-red-500 hover:border-black hover:text-white text-gray-400"
          >
            اطلاعات بیشتر
          </Link>
        </div>
        <div>
          <Image
            src={"/hero-section-pic.png"}
            width={350}
            height={300}
            alt="hero-section"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
