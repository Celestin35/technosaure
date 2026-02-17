"use client";

import Button from "./Button";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useLayoutEffect, useRef } from "react";
import { animateSplitText } from "../../AnimationsHelper/Animations";

gsap.registerPlugin(SplitText);

export default function HeaderContentBilleterie() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = animateSplitText({
        elements: [title],
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
          },
        );
      }
    });

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 gap-8 pb-12 md:pb-34">
      <h1
        ref={titleRef}
        className="heading-1 uppercase text-tec-white text-stroke-black-1 font-gothic opacity-0 invisible"
      >
        Billeterie
      </h1>
      <div
        ref={buttonsRef}
        className="flex items-center justify-center opacity-0 invisible"
      >
        <Button href="#tarifs" variant="secondary">
          <span>tarifs</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="16px"
            height="16px"
            viewBox="0 0 1920 1920"
          >
            <path
              d="M849.973.011v1497.931L486.9 1134.871 331 1290.772 960.228 1920l629.228-629.228-155.901-155.901-363.071 363.071V.011z"
              fillRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
