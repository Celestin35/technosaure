"use client";

import Navbar from "./Navbar";
import Image from "next/image";
import HeaderContentBilleterie from "./HeaderContentBilleterie";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function HeaderBilleterie() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative h-[60vh] w-full pt-5 md:pt-10">
      <Image
        src="/images/bg-billeterie.jpg"
        alt="Festival Technosaure"
        fill
        priority
        className="z-0 object-center object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Navbar onToggle={() => setIsMenuOpen(prev => !prev)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <HeaderContentBilleterie />
    </section>
  );
}
