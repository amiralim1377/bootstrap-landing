function CompanyStats() {
  const stats = [
    { image: "/images/CompanyStats/4.png", text: "سرمایه انسانی" },
    { image: "/images/CompanyStats/3.png", text: "مراکز فروش" },
    { image: "/images/CompanyStats/2.png", text: "محصولات گلستان" },
    { image: "/images/CompanyStats/1.png", text: "مشتریان گلستان" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={`stat-${index}`}
              className="w-48 h-48 object-contain mb-4"
            />
            <p className="text-sm font-medium text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyStats;
