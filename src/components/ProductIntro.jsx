import Image from "next/image";

function ProductIntro() {
  return (
    <div
      className="w-100 position-relative mx-auto"
      style={{ marginTop: "2rem", height: "500px" }}
    >
      <Image
        src="/images/ProductIntro/1.jpg"
        alt="تصویر محصول"
        fill
        className="object-fit-cover"
      />

      <div
        className="position-absolute text-center text-white"
        style={{
          bottom: 0,
          right: "25%",
          backgroundColor: "var(--golestan-red-600)",
          padding: "1rem 1.5rem",
          width: "250px",
        }}
      >
        <p className="fw-bold mb-2" style={{ fontSize: "1.125rem" }}>
          برنج گلستان
        </p>
        <p style={{ fontSize: "0.875rem" }}>معرفی محصول</p>
      </div>
    </div>
  );
}

export default ProductIntro;
