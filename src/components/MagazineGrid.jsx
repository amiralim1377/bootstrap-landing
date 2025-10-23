import Image from "next/image";

export default function MagazineGrid() {
  const magazine = [
    {
      image: "/images/Magazine/1.jpg",
      title: "چیلاکیله",
      description:
        "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست",
    },
    {
      image: "/images/Magazine/2.jpg",
      title: "سوپ مکزیکی",
      description:
        "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…",
    },
    {
      image: "/images/Magazine/3.jpg",
      title: "ماکارونی با سبزیجات",
      description:
        "ابتدا ماکارونی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {magazine.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-72">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h4 className="text-lg font-semibold text-red-600">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>
              <button className="mt-2 w-fit border text-gray-400 p-4 border-gray-400 text-sm font-medium text-site-primary hover:text-site-primary/70 transition-colors duration-200">
                ادامه مطلب →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
