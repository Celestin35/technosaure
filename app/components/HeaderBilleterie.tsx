import Navbar from "./Navbar";
import Image from "next/image";
import HeaderContentBilleterie from "./HeaderContentBilleterie";

export default function HeaderBilleterie() {

    return (
        <section className="relative h-[60vh] w-full pt-8 md:pt-10">
              <Image
            src="/images/bg-billeterie.jpg"
            alt="Festival Technosaure"
            fill
            priority
            className="z-0 object-center object-cover"
          />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <Navbar />
              <HeaderContentBilleterie />
            </section>
    );
}