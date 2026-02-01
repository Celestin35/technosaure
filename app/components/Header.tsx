import Navbar from "./Navbar";
import BannerTop from "./BannerTop";
import HeaderContent from "./HeaderContent";
import Image from "next/image";

export default function Header() {
  return (
    <section className="relative h-[90vh] w-full pt-8 md:pt-10">
      <Image
              src="/images/bg-billeterie.jpg"
              alt="Festival Technosaure"
              fill
              priority
              className="z-0 object-center object-cover"
            />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <BannerTop />
      <Navbar />
      <HeaderContent />
    </section>
  );
}
