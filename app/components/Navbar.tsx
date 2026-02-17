"use client";

import Link from "next/link";
import Button from "./Button";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

type NavbarProps = {
  onToggle: () => void;
};

export default function Navbar({ onToggle }: NavbarProps) {
  const navRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.set(nav, { autoAlpha: 0, y: 20 });
      gsap.to(nav, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }, nav);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={navRef}
      className="w-full relative opacity-0 invisible"
    >
      <div className="container flex items-center justify-between z-10 relative sm:py-8">
        <div className="w-fit">
          <Link href="/">
            <p className="font-bungee text-[28px] md:text-4xl uppercase text-tec-white">
              TECHNOSAURE
            </p>
          </Link>
        </div>
        <div className="block md:hidden w-fit" onClick={onToggle}>
          <svg
            width={30}
            height={16}
            viewBox="0 0 30 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1={1} x2={30} y2={1} stroke="#F2F1F1" strokeWidth={2} />
            <line
              x1={10}
              y1={8}
              x2={30}
              y2={8}
              stroke="#F2F1F1"
              strokeWidth={2}
            />
            <line y1={15} x2={30} y2={15} stroke="#F2F1F1" strokeWidth={2} />
          </svg>
        </div>
        <div className="hidden md:flex items-center justify-between gap-5">
          <ul className="desktop-navbar flex items-center justify-between gap-5 text-tec-white">
            <li>
              <Link href="/#programmation">Programmation</Link>
            </li>
            <li>
              <Link href="/billeterie#infos-pratiques">Infos pratiques</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <Button href="/billeterie" variant="primary">
            <span>Billeterie</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
