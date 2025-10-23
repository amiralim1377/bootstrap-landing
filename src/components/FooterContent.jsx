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
    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-4">
      {content.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center gap-4"
        >
          {/* تصویر */}
          <Image
            src={item.image}
            alt={item.title}
            width={90}
            height={90}
            className="object-contain"
          />

          {/* عنوان با خطوط بالا و پایین */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-36 h-px bg-gray-300"></div>
            <h4 className="text-lg font-semibold text-gray-300">
              {item.title}
            </h4>
            <div className="w-36 h-px bg-gray-300"></div>
          </div>

          {/* لینک‌ها */}
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            {item.link.map((text, i) => (
              <li
                key={i}
                className="hover:text-red-600 transition-colors duration-200 cursor-pointer"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
