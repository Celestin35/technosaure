"use client";

import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function ArtistCard({
  name,
  imageUrl,
}: {
  name?: string;
  imageUrl?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hoverTl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const neon = container.querySelectorAll("[data-anim='neon']");
    hoverTl.current = gsap
      .timeline({ paused: true })
      .to(neon, {
        height: "80px",
        duration: 0.3,
        ease: "power2.inOut",
      });

    return () => {
      hoverTl.current?.kill();
      hoverTl.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square overflow-hidden"
      onMouseEnter={() => hoverTl.current?.play()}
      onMouseLeave={() => hoverTl.current?.reverse()}
    >
      <Image
        src={imageUrl || "/artists/default.jpg"}
        alt={name || "Artist"}
        fill
        className="w-full h-full object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
      />
      {name && (
        <div className="absolute text-sm md:text-[15px] lg:text-[18px] font-gothic bottom-2 left-1/2 -translate-x-1/2 text-tec-white text-center uppercase text-stroke-black-1 w-[95%]">
          {name}
        </div>
      )}
    </div>
  );
}
