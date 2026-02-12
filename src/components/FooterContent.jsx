import Image from "next/image";
import first from "../../public/images/footer/1.png";
import second from "../../public/images/footer/2.png";
import third from "../../public/images/footer/3.png";
import fourth from "../../public/images/footer/4.png";

const content = [
  {
    image: first,
    title: "چای گلستان",
    link: [
      "چای ممتاز هندوستان",
      "چای ممتاز ارل گری",
      "چای عطری",
      "چای ممتاز سیلان",
      "چای صبحانه گلستان",
    ],
  },
  {
    image: second,
    title: "تی بگ گلستان",
    link: ["تی بگ بلک لاین", "تی بگ ارل گری", "دمنوش نعناع", "دمنوش بابونه"],
  },
  {
    image: third,
    title: "ادویه گلستان",
    link: ["زعفران ممتاز خراسان", "ادویه کاری", "ادویه ماست و خیار", "زردچوبه"],
  },
  {
    image: fourth,
    title: "حبوبات گلستان",
    link: ["لوبیا قرمز ممتاز", "لوبیا چیتی گلستان", "عدس کانادایی"],
  },
];

export default function FooterContent() {
  return (
    <div className="mx-auto w-100 py-4 px-3" style={{ maxWidth: "72rem" }}>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {content.map((item, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center text-center gap-3"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={90}
              height={90}
              className="object-fit-contain"
            />

            <div className="w-100 d-flex flex-column align-items-center gap-2">
              <div className="footer-divider" />
              <h4
                className="fw-semibold"
                style={{
                  fontSize: "1.125rem",
                  color: "var(--golestan-gray-300)",
                }}
              >
                {item.title}
              </h4>
              <div className="footer-divider" />
            </div>

            <ul
              className="d-flex flex-column justify-content-center  gap-2    footer-links list-unstyled mb-0"
              style={{ color: "var(--golestan-gray-300)" }}
            >
              {item.link.map((text, i) => (
                <li className="" key={i}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
