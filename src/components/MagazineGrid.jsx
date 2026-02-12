import Image from "next/image";

export default function MagazineGrid() {
  const magazine = [
    {
      image: "images/Magazine/1.jpg",
      title: "چیلاکیله",
      description:
        "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست",
    },
    {
      image: "images/Magazine/2.jpg",
      title: "سوپ مکزیکی",
      description:
        "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…",
    },
    {
      image: "images/Magazine/3.jpg",
      title: "ماکارونی با سبزیجات",
      description:
        "ابتدا ماکارونی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…",
    },
  ];

  return (
    <section className="mx-auto py-5 px-3" style={{ maxWidth: "72rem" }}>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {magazine.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm overflow-hidden p-4"
            style={{
              transition: "box-shadow 0.3s ease",
            }}
          >
            <div
              className="position-relative w-100"
              style={{ height: "18rem" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-fit-cover"
              />
            </div>

            <div className="p-4 d-flex flex-column gap-2">
              <h4
                className="fw-semibold"
                style={{
                  fontSize: "1.125rem",
                  color: "var(--golestan-red-600)",
                }}
              >
                {item.title}
              </h4>
              <p
                className="small three-line-clamp"
                style={{ color: "var(--golestan-gray-600)" }}
              >
                {item.description}
              </p>
              <button
                className="mt-2 border-0 bg-transparent p-0"
                style={{
                  padding: "1rem",
                  width: "fit-content",
                  border: `1px solid var(--golestan-gray-400)`,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--golestan-gray-400)",
                  transition: "color 0.2s ease",
                }}
              >
                ادامه مطلب →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
