import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="w-100"
      style={{ backgroundColor: "var(--golestan-hero-bg)" }}
    >
      <section className="d-flex  flex-row mx-auto align-items-center justify-content-between py-4 container">
        <div
          className="d-flex mt-4 flex-column align-items-start gap-3"
          style={{ maxWidth: "28rem" }}
        >
          <h1 className="fs-3" style={{ color: "var(--golestan-red-600)" }}>
            قرعه‌کشی مصرف‌کنندگان گلستان
          </h1>
          <p className="fs-5" style={{ color: "var(--golestan-gray-600)" }}>
            قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان
          </p>
          <p
            className="loose-line-height"
            style={{ color: "var(--golestan-gray-500)" }}
          >
            هر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با
            ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای
            گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
            است.
          </p>
          <Link href="/" className="hero-button">
            اطلاعات بیشتر
          </Link>
        </div>
        <div className="text-center">
          <Image
            src={"/hero-section-pic.png"}
            width={350}
            height={400}
            alt="hero-section"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
