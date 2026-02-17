"use client";

import Navbar from "./Navbar";
import BannerTop from "./BannerTop";
import HeaderContent from "./HeaderContent";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <section className="relative h-dvh md:h-[90vh] w-full overflow-hidden">
      <Image
              src="/images/bg-billeterie.jpg"
              alt="Festival Technosaure"
              fill
              priority
              className="z-0 object-center object-cover"
            />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute top-0 left-0 w-full z-20">
        <BannerTop />
        <Navbar onToggle={() => setIsMenuOpen(prev => !prev)} />
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <HeaderContent />
    </section>
  );
}
