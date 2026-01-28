import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <section className="relative h-[90vh] w-full pt-20 md:pt-10">
      <Image
        src="/images/bg-home.jpg"
        alt="Festival Technosaure"
        fill
        priority
        className="z-0 object-center object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Navbar />
    </section>
  );
}
