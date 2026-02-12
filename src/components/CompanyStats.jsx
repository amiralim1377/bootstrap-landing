function CompanyStats() {
  const stats = [
    { image: "/images/CompanyStats/4.png", text: "سرمایه انسانی" },
    { image: "/images/CompanyStats/3.png", text: "مراکز فروش" },
    { image: "/images/CompanyStats/2.png", text: "محصولات گلستان" },
    { image: "/images/CompanyStats/1.png", text: "مشتریان گلستان" },
  ];

  return (
    <div className="mx-auto p-4" style={{ maxWidth: "64rem" }}>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 text-center">
        {stats.map((item, index) => (
          <div key={index} className="d-flex flex-column align-items-center">
            <img
              src={item.image}
              alt={`stat-${index}`}
              className="object-fit-contain mb-4"
              style={{ width: "12rem", height: "12rem" }}
            />
            <p
              className="small fw-medium"
              style={{ color: "var(--golestan-gray-500)" }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyStats;
