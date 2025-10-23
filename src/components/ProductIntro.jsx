import Image from "next/image";

function ProductIntro() {
  return (
    <div className="w-full mt-8 mx-auto h-[500px] relative">
      <Image
        src="/images/ProductIntro/1.jpg"
        alt="تصویر محصول"
        fill
        className="object-cover"
      />

      <div className="absolute bottom-0 right-1/4 bg-red-600 text-white px-6 py-4 text-center w-[250px]">
        <p className="text-lg font-bold mb-2">برنج گلستان</p>
        <p className="text-sm">معرفی محصول</p>
      </div>
    </div>
  );
}

export default ProductIntro;
