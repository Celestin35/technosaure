"use client";

import Button from "./Button";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useLayoutEffect, useRef } from "react";
import { animateSplitText } from "../../AnimationsHelper/Animations";

gsap.registerPlugin(SplitText);

export default function HeaderContent() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;
    if (!title || !subtitle || !description) return;

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = animateSplitText({
        elements: [title, subtitle, description],
      });

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: "power2.out",
          }
        );
      }

    });

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative z-20 max-md:pt-20 flex flex-col items-center md:justify-center text-center px-4 gap-4 h-full pb-12">
      <h1 ref={titleRef} className="heading-1 uppercase text-stroke-1 md:text-stroke-2 font-gothic opacity-0 invisible">
        23 AVRIL 2026
      </h1>
      <h2 ref={subtitleRef} className="heading-2 uppercase text-stroke-1 font-gothic opacity-0 invisible">
        RENNES
        <br />
        PARC EXPO
      </h2>
      <div
        ref={buttonsRef}
        className="block md:flex items-center md:justify-center md:gap-6 opacity-0 invisible"
      >
        <Button href="#programmation" variant="primary" classList="hidden md:block">
          <span>Artistes</span>
        </Button>
        <Button href="/billeterie" variant="primary">
          <span>Billeterie</span>
        </Button>
      </div>

      <p
        ref={descriptionRef}
        className="pt-5 md:pt-15 uppercase heading-4 text-tec-white font-gothic text-stroke-black-1 opacity-0 invisible"
      >
        LE PLUS GRAND FESTIVAL DE TECHNO D'EUROPE
      </p>
    </div>
  );
}
